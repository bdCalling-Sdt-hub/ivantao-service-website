import { loadStripe } from "@stripe/stripe-js";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY in environment variables.");
}

export const stripe = loadStripe(process.env.STRIPE_SECRET_KEY);
