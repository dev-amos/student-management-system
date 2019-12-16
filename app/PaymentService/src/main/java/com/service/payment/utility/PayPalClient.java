/*
 * package com.service.payment.utility;
 * 
 * import com.paypal.core.PayPalEnvironment; import
 * com.paypal.core.PayPalHttpClient;
 * 
 * //
 * https://developer.paypal.com/docs/checkout/reference/server-integration/setup
 * -sdk/ public class PayPalClient {
 * 
 *//**
	 * Set up the PayPal Java SDK environment with PayPal access credentials. This
	 * sample uses SandboxEnvironment. In production, use LiveEnvironment.
	 */
/*
 * private PayPalEnvironment environment = new PayPalEnvironment.Sandbox(
 * "AUPgvU1uWMam7CU_UXBlRhEIWkiGUTJQgMyKQd6fQWgcFhLvL1ZtftthVhMcd6irjXOr_CCwiVLr2iBe",
 * "EGFlRV7iNffu2olmHvhvNwpN_u8iemkbSYDOetEo6CePfpP52SxTW7yjJiuSr8UPF2ykO_L8b5-2gy7b"
 * );
 * 
 *//**
	 * PayPal HTTP client instance with environment that has access credentials
	 * context. Use to invoke PayPal APIs.
	 */
/*
 * PayPalHttpClient client = new PayPalHttpClient(environment);
 * 
 *//**
	 * Method to get client object
	 *
	 * @return PayPalHttpClient client
	 *//*
		 * public PayPalHttpClient client() { return this.client; } }
		 */