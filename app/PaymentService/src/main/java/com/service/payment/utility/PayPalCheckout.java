package com.service.payment.utility;

import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;

import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;

import com.paypal.api.payments.Amount;
import com.paypal.api.payments.Authorization;
import com.paypal.api.payments.Capture;
import com.paypal.api.payments.Details;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Order;
import com.paypal.api.payments.Payer;
import com.paypal.api.payments.Payment;
import com.paypal.api.payments.PaymentExecution;
import com.paypal.api.payments.RedirectUrls;
import com.paypal.api.payments.Transaction;

public class PayPalCheckout {
	
	public static Payment createOrder(String feeStr, String successUrl, String failureUrl) {
//		String feeStr = Integer.toString(fee);
		
		// Add payer details
		Payer payer = new Payer();
		payer.setPaymentMethod("paypal");

		// Add redirect URLs
		RedirectUrls redirectUrls = new RedirectUrls();
		redirectUrls.setReturnUrl(successUrl);
		redirectUrls.setCancelUrl(failureUrl);

		// Set payment details
		Details details = new Details();
		details.setSubtotal(feeStr);

		// Payment amount
		Amount amount = new Amount();
		amount.setCurrency("SGD");

		// Total must be equal to sum of shipping, tax and subtotal.
		amount.setTotal(feeStr);
		amount.setDetails(details);

		// Transaction information
		Transaction transaction = new Transaction();
		transaction.setAmount(amount);
		transaction.setDescription("School Fees");

		// Add transaction to a list
		List<Transaction> transactions = new ArrayList<Transaction>();
		transactions.add(transaction);

		// Add payment details
		Payment payment = new Payment();
		payment.setIntent("order");
		payment.setPayer(payer);
		payment.setRedirectUrls(redirectUrls);
		payment.setTransactions(transactions);
		
		return payment;
	}

}
