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
import { Button, message, Modal } from "antd";
import { usePathname } from "next/navigation";
import Title from "antd/es/typography/Title";
import { Loader2Icon } from "lucide-react";

const stripePromise = loadStripe(
  "pk_test_51QKAtBKOpUtqOuW1x5VdNqH3vG7CZZl1P6V3VuV1qsRUmPLNk26i34AXeu2zCO3QurFJAOZ9zfb0EkWeCVhqBYgH008X41cXr6"
);
const CheckoutForm = ({
  price,
  clientSecret,
  orderData,
}: {
  price: string;
  clientSecret: string;
  orderData: {
    user_id: string;
    service_id: string;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
  };
}) => {
  const [cookies] = useCookies(["raven"]);
  const path = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferedLink, setPreferedLink] = useState<string>("/");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    // Call elements.submit() to collect data
    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.error(submitError.message);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: window.location.origin,
      },
      redirect: "if_required",
    });

    if (error) {
      console.error(error.message);
    } else if (paymentIntent.status === "succeeded") {
      console.log("Payment successful!");
      const readyData = {
        ...orderData,
        payment_intent_id: paymentIntent.id,
      };
      console.log(readyData);
      try {
        const call = await postFetcher({
          link: "/create-order",
          token: cookies.raven,
          meth: "POST",
          data: readyData,
        });

        if (!call.status) {
          message.error(call.message);
          return;
        } else {
          message.success(call.message);
          setPreferedLink(`${path}/order-summery?access=${call.data.id}`);
          showModal();
        }
      } catch (error) {
        alert("Payment was successful but couldn't add to database");
      }
    }

    if (error) alert(error.message);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <Button
          size="large"
          htmlType="submit"
          className="!bg-[#7849D4] hover:!bg-[#7849D4] !text-background !border-none w-full mt-12"
          disabled={!stripe || !elements}
        >
          Pay ${parseInt(price).toFixed(2)} (with charge)
        </Button>
      </form>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={false}
      >
        <div className="py-8 space-y-2">
          <Title className="text-center !m-0">
            <span className="!text-8xl">🎉</span> <br /> Congratulations! <br />{" "}
            Your purchase is done
          </Title>
          <p className="text-gray-400 text-xl text-center">
            Thank you for make purchase with us
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Button
            href={`${preferedLink}`}
            size="large"
            type="primary"
            className="bg-[#7849D4] hover:!bg-[#57349c] !text-background !border-none w-full text-xl font-semibold py-6"
          >
            See Payment Data
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default function PaymentForm({
  id,
  price,
  orderData,
}: {
  id: string;
  price: string;
  orderData: {
    user_id: string;
    service_id: string;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
  };
}) {
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
          // mode: "payment",
          // amount: 123,
          // currency: "usd",
          clientSecret,
        }}
      >
        <CheckoutForm
          clientSecret={clientSecret}
          price={price}
          orderData={orderData}
        />
      </Elements>
    </>
  ) : (
    <div className="h-[100px] w-full flex justify-center items-center">
      <Loader2Icon className="animate-spin !mr-4" />
      Preparing your order
    </div>
  );
}
