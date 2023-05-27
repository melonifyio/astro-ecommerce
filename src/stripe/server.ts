import Stripe from 'stripe';
import type { Product } from '../consts';

const stripe = new Stripe(import.meta.env.STRIPE_API_KEY, {
  apiVersion: '2022-11-15',
});

export const createCheckoutSession = async (product: Product) => {
  const session = await stripe.checkout.sessions.create({
    success_url: 'https://example.com/success',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: product.price * 100,
          product_data: { name: product.title },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
  });

  return session;
};
