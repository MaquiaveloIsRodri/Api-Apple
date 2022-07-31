require('dotenv').config();
const Stripe = require('stripe')
const stripe = new Stripe( process.env.STRIPE);

class checkout {
  constructor() { }
  async checkout(id, amount) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'USD',
        description: 'Producto Apple',
        payment_method: id,
        confirm: true
      });
      return { paymentIntent };
    } catch (error) {
      return { error };
    }
  }
}

module.exports = checkout;
