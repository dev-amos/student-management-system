package com.service.payment.controller;

import java.util.Arrays;
import java.util.Collection;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.paypal.api.payments.Amount;
import com.paypal.api.payments.Authorization;
import com.paypal.api.payments.Capture;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Order;
import com.paypal.api.payments.Payment;
import com.paypal.api.payments.PaymentExecution;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import com.service.payment.dao.FeesRepository;
import com.service.payment.dao.PaymentRecordsRepository;
import com.service.payment.entity.PaymentRecords;
import com.service.payment.utility.PayPalCheckout;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {
	
	@Autowired
	private FeesRepository feesRepository;
	
	@Autowired
	private PaymentRecordsRepository paymentRecordsRepository;
	
	String clientId = "AUPgvU1uWMam7CU_UXBlRhEIWkiGUTJQgMyKQd6fQWgcFhLvL1ZtftthVhMcd6irjXOr_CCwiVLr2iBe";
	String clientSecret = "EGFlRV7iNffu2olmHvhvNwpN_u8iemkbSYDOetEo6CePfpP52SxTW7yjJiuSr8UPF2ykO_L8b5-2gy7b";
	APIContext apiContext = new APIContext(clientId, clientSecret, "sandbox");
	
	@CrossOrigin
	@GetMapping("getPaymentStatus")
	public JsonNode getPaymentStatus(@RequestParam("studentId") int studentId) {
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		
		Iterable<PaymentRecords> records = paymentRecordsRepository.findAllByStudentID(studentId);
		
		if (((Collection<?>) records).size() == 0) {
			node.put("status", HttpStatus.NOT_FOUND.value());
			node.put("message", "No payment records found.");
		} else {
			PaymentRecords record = StreamSupport.stream(records.spliterator(), false)
													.sorted(Comparator.comparing(PaymentRecords::getAnnualYear)
																		.thenComparing(PaymentRecords::getSemester)
																		.reversed())
													.collect(Collectors.toList())
													.get(0);
			node.put("status", HttpStatus.OK.value());
			node.set("value", mapper.valueToTree(record));
		}
		return node;
	}
	
	@CrossOrigin
	@GetMapping("makePayment")
	public JsonNode getPayment(@RequestParam("amount") String amountStr, 
			@RequestParam("successUrl") String successUrl,
			@RequestParam("failureUrl") String failureUrl) {
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		
		Payment payment = PayPalCheckout.createOrder(amountStr, successUrl, failureUrl);
		
		try {
			Payment createdPayment = payment.create(apiContext);
			
			Iterator links = createdPayment.getLinks().iterator();
			while (links.hasNext()) {
				Links link = (Links) links.next();
				if (link.getRel().equalsIgnoreCase("approval_url")) {
					//REDIRECT USER TO link.getHref()
					node.put("status", HttpStatus.OK.value());
					node.put("redirect_link", link.getHref());
				}
			}
		} catch (PayPalRESTException e) {
			node.put("status", HttpStatus.BAD_REQUEST.value());
			node.put("message", e.getDetails().getMessage());
		}
		
		/*
		 * try { int amount = Integer.valueOf(amountStr); new
		 * CreateOrder().createOrder(amount, true); node.put("status",
		 * HttpStatus.OK.value()); node.put("url", "test"); } catch
		 * (com.braintreepayments.http.exceptions.HttpException e) {
		 * System.out.println(e.getLocalizedMessage()); } catch (Exception e) {
		 * e.printStackTrace(); }
		 */
		
		return node;
	}
	
	@CrossOrigin
	@GetMapping("frontendsuccess")
	public JsonNode getTransactionDetails(@RequestParam("paymentId") String paymentId,
			@RequestParam("token") String token,
			@RequestParam("PayerID") String payerId) {
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		
		// Params from PayPal
		node.put("paymentId", paymentId);
		node.put("token", token);
		node.put("payerId", payerId);
		
		// Params from frontend
		node.put("amount", 1000);
		node.put("studentId", 1);
		node.put("annualYear", 2019);
		node.put("semester", 1);
		
		return node;
	}
		
	@CrossOrigin
	@GetMapping("updatePayment")
	public JsonNode updatePayment(
			@RequestParam("paymentId") String paymentId,
			@RequestParam("token") String token,
			@RequestParam("payerId") String payerId,
			@RequestParam("amount") String fee,
			@RequestParam("studentId") int studentId, 
			@RequestParam("annualYear") int annualYear,
			@RequestParam("semester") int semester) {
		
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		
		// Get payment id from query string following redirect
		Payment payment = new Payment();
		payment.setId(paymentId);

		// Execute payment using payer_id obtained from query string following redirect
		PaymentExecution paymentExecution = new PaymentExecution();
		paymentExecution.setPayerId(payerId);
		try {
		    Payment createdPayment = payment.execute(apiContext, paymentExecution);
		    
		    if ("approved".equals(createdPayment.getState())){
			    // Get order id
			    String orderId = createdPayment.getTransactions().get(0)
					    .getRelatedResources().get(0).getOrder().getId();
			    
			    // Set auth amount
			    Amount amount = new Amount();
			    amount.setCurrency("SGD");
			    amount.setTotal(fee);
			    
			    // Authorize order
			    Order order = new Order();
			    order = Order.get(apiContext, orderId);
			    order.setAmount(amount);
			    Authorization authorization = order.authorize(apiContext);
			    
			    // Capture payment
			    Capture capture = new Capture();
			    capture.setAmount(amount);
			    capture.setIsFinalCapture(true);
			    
			    Capture responseCapture = authorization.capture(apiContext, capture);
			    
			    System.out.println("Capture id = " + responseCapture.getId() + " and status = " + responseCapture.getState());
			    
			    // Update database to reflect student id has paid school fees for year and semester
				PaymentRecords paymentRecords = new PaymentRecords(studentId, annualYear, semester, true);
				paymentRecordsRepository.save(paymentRecords);
				
				node.put("status", HttpStatus.OK.value());
				node.put("message", "Payment successful.");
		    }
		  
		} catch (PayPalRESTException e) {
			node.put("status", HttpStatus.BAD_REQUEST.value());
			node.put("message", e.getDetails().getMessage());
		}
		
		return node;
	}
	
	
}
