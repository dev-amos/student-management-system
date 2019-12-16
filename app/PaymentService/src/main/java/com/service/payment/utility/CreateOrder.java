/*
 * package com.service.payment.utility;
 * 
 * import java.io.IOException; import java.util.ArrayList; import
 * java.util.List;
 * 
 * import com.braintreepayments.http.HttpResponse; import
 * com.paypal.orders.AmountWithBreakdown; import
 * com.paypal.orders.ApplicationContext; import
 * com.paypal.orders.LinkDescription; import com.paypal.orders.Order; import
 * com.paypal.orders.OrderRequest; import com.paypal.orders.OrdersCreateRequest;
 * import com.paypal.orders.PurchaseUnitRequest;
 * 
 * //
 * https://developer.paypal.com/docs/checkout/reference/server-integration/setup
 * -sdk/
 *
 * 
 * 1. Import the PayPal SDK client that was created in `Set up Server-Side SDK`.
 * This step extends the SDK client. It's not mandatory to extend the client,
 * you can also inject it.
 *
 * 
 * public class CreateOrder extends PayPalClient {
 * 
 * //2. Set up your server to receive a call from the client
 *//**
	 * Method to create order
	 *
	 * @param debug true = print response data
	 * @return HttpResponse<Order> response received from API
	 * @throws IOException Exceptions from API if any
	 **/
/*
 * public HttpResponse<Order> createOrder(int amount, boolean debug) throws
 * IOException {
 * 
 * OrdersCreateRequest request = new OrdersCreateRequest();
 * request.prefer("return=representation");
 * request.requestBody(buildRequestBody(amount));
 * 
 * //3. Call PayPal to set up a transaction HttpResponse<Order> response =
 * client().execute(request); if (debug) { if (response.statusCode() == 201) {
 * System.out.println("Status Code: " + response.statusCode());
 * System.out.println("Status: " + response.result().status());
 * System.out.println("Order ID: " + response.result().id());
 * System.out.println("Intent: " + response.result().intent());
 * System.out.println("Links: "); for (LinkDescription link :
 * response.result().links()) { System.out.println("\t" + link.rel() + ": " +
 * link.href() + "\tCall Type: " + link.method()); }
 * System.out.println("Total Amount: " +
 * response.result().purchaseUnits().get(0).amount().currencyCode() + " " +
 * response.result().purchaseUnits().get(0).amount().value()); } } return
 * response; }
 * 
 *//**
	 * Method to generate sample create order body with CAPTURE intent
	 *
	 * @return OrderRequest with created order request
	 *//*
		 * private OrderRequest buildRequestBody(int amount) { OrderRequest orderRequest
		 * = new OrderRequest(); orderRequest.intent("CAPTURE");
		 * 
		 * ApplicationContext applicationContext = new ApplicationContext()
		 * .brandName("University") .landingPage("BILLING");
		 * orderRequest.applicationContext(applicationContext);
		 * 
		 * List<PurchaseUnitRequest> purchaseUnitRequests = new
		 * ArrayList<PurchaseUnitRequest>(); PurchaseUnitRequest purchaseUnitRequest =
		 * new PurchaseUnitRequest() .referenceId("FEE") .description("School Fees")
		 * .amount(new AmountWithBreakdown() .currencyCode("SGD")
		 * .value(Integer.toString(amount)));
		 * purchaseUnitRequests.add(purchaseUnitRequest);
		 * orderRequest.purchaseUnits(purchaseUnitRequests); return orderRequest; } }
		 */