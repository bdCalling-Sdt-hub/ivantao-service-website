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

const PayoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayout = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: { return_url: window.location.origin },
      });

      if (error) alert(error.message);
    } catch (error) {
      console.error("Payout Error:", error);
    }
  };

  return (
    <form onSubmit={handlePayout}>
      <PaymentElement />
      <Button
        size="large"
        htmlType="submit"
        className="!bg-[#7849D4] hover:!bg-[#7849D4] !text-background !border-none w-full mt-12"
        disabled={!stripe || !elements}
      >
        Payout
      </Button>
    </form>
  );
};

export default function WithdrawPayoutB({ id }: { id: string }) {
  const [clientSecret, setClientSecret] = useState("");
  const [cookies] = useCookies(["raven"]);

  useEffect(() => {
    async function getPayoutIntent() {
      try {
        const response = await postFetcher({
          link: "/create-payout",
          token: cookies.raven,
          data: { service_id: id },
        });

        if (response?.data?.client_secret) {
          setClientSecret(response.data.client_secret);
        } else {
          console.error("client_secret is missing from response!");
        }
      } catch (error) {
        console.error("Payout Intent Error:", error);
      }
    }

    getPayoutIntent();
  }, []);

  return clientSecret ? (
    <>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <PayoutForm />
      </Elements>
    </>
  ) : (
    <p>Loading...</p>
  );
}
