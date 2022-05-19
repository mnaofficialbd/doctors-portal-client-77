/**
 * 1. install stripe & react stripe.js in client side: ( npm install --save @stripe/react-stripe-js @stripe/stripe-js ) 
 * 2. create stripe account on stripe.com.
 * 3. get Publishable key from stripe.com > developer > API keys (pk_....._...)
 * 4. create Elements wrapper using Publishable key.
 * 5. Create checkout-form using card element. useStripe, useElements.
 * 6. get card elements info(create card info).
 * 7. get credit card info/error + display card error(if any)
 * ----------------------
 * 8. install stripe in server side: ( npm install --save stripe ) 
 * 9. get client secret from backend via payment intent post api.
 * 10. store client secret on the client side.
*/