"use client";

import { useState } from "react";
import { Input, Select } from "antd";
import { CreditCardFilled } from "@ant-design/icons";
import { CreditCardIcon } from "lucide-react";

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "gb", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  // Add more countries as needed
];

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  // Detect card type based on number
  const getCardType = (number: string) => {
    const re = {
      visa: /^4/,
      mastercard: /^5[1-5]/,
      amex: /^3[47]/,
      discover: /^6(?:011|5)/,
    };

    const cleanNumber = number.replace(/\D/g, "");

    if (re.visa.test(cleanNumber)) return "visa";
    if (re.mastercard.test(cleanNumber)) return "mastercard";
    if (re.amex.test(cleanNumber)) return "amex";
    if (re.discover.test(cleanNumber)) return "discover";
    return "";
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg">
      <div className="mb-6 grid grid-cols-4">
        <div className="rounded-lg border-2 border-blue-400 p-2">
          <CreditCardFilled className="text-md text-blue-500" />
          <p className="text-blue-500 font-bold">Card</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card number
          </label>
          <div className="relative">
            <Input
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              placeholder="1234 1234 1234 1234"
              maxLength={19}
              className="w-full pr-12"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <img
                src={`/payment-icons/${getCardType(cardNumber)}.svg`}
                alt="Card type"
                className={`h-6 ${
                  getCardType(cardNumber) ? "visible" : "invisible"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiration
            </label>
            <Input placeholder="MM / YY" maxLength={7} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVC
            </label>
            <div className="relative">
              <Input placeholder="CVC" maxLength={4} className="pr-8" />
              <CreditCardIcon
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                // title="The security code on your card"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <Select
            options={countries}
            placeholder="Select country"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
