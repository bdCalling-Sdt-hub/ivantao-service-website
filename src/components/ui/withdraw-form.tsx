/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { postFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { Button } from "antd";

const stripePromise = loadStripe(
  "pk_test_51R7AneH4E1RWkNRn8fiH8Cu0OSkZVxscWBouwfJfn1rc3rOe5UTW0IZGaNoslfVYc2wSUVeiX8bEwlyl5uUW6j5X00m7ygYtta"
);
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin },
    });

    if (error) alert(error.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button
        size="large"
        htmlType="submit"
        className="!bg-[#7849D4] hover:!bg-[#7849D4] !text-background !border-none w-full mt-12"
        disabled={!stripe || !elements}
      >
        Withdraw
      </Button>
    </form>
  );
};

export default function WithdrawForm({ id }: { id: string }) {
  const [clientSecret, setClientSecret] = useState("");
  const [cookies] = useCookies(["raven"]);

  useEffect(() => {
    console.log("Service ID:", id);
    console.log("Fetching Payment Intent...");

    async function getData() {
      try {
        const call = await postFetcher({
          link: "/order-payment",
          token: cookies.raven,
          data: { service_id: id, payment_method: "pm_card_visa" },
        });

        console.log("API Response:", call);

        if (call?.data?.client_secret) {
          setClientSecret(call.data.client_secret);
        } else {
          console.error("client_secret is missing from API response!");
        }
      } catch (error) {
        console.error("Payment Intent Fetch Error:", error);
      }
    }

    getData();
  }, []);

  return clientSecret ? (
    <>
      <br />
      <Elements
        stripe={stripePromise}
        options={{
          mode: "setup",
          // amount: 123,
          currency: "usd",
          // clientSecret,
        }}
      >
        <CheckoutForm />
      </Elements>
    </>
  ) : (
    <p>Loading...</p>
  );
}
