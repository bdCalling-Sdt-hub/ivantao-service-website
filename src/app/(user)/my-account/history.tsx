"use client";

import { Card, Typography } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface TransactionEntry {
  title: string;
  providerName: string;
  quantity: string;
  location: string;
  date: string;
  time: string;
  amount: number;
}

const recentTransactions: TransactionEntry[] = [
  {
    title: "Share cleaning service as pro.",
    providerName: "Md. Hasan",
    quantity: "10pc",
    location: "new york city",
    date: "23/12/2024",
    time: "5:00am",
    amount: -5200,
  },
  {
    title: "Share cleaning service as pro.",
    providerName: "Md. Hasan",
    quantity: "10pc",
    location: "new york city",
    date: "23/12/2024",
    time: "5:00pm",
    amount: -5200,
  },
];

const pastTransactions: TransactionEntry[] = [
  {
    title: "Share cleaning service as pro.",
    providerName: "Md. Hasan",
    quantity: "10pc",
    location: "new york city",
    date: "23/12/2024",
    time: "5:00am",
    amount: -5200,
  },
  {
    title: "Share cleaning service as pro.",
    providerName: "Md. Hasan",
    quantity: "10pc",
    location: "new york city",
    date: "23/12/2024",
    time: "5:00pm",
    amount: -5200,
  },
  {
    title: "Share cleaning service as pro.",
    providerName: "Md. Hasan",
    quantity: "10pc",
    location: "new york city",
    date: "23/12/2024",
    time: "5:00pm",
    amount: -5200,
  },
  {
    title: "Share cleaning service as pro.",
    providerName: "Md. Hasan",
    quantity: "10pc",
    location: "new york city",
    date: "23/12/2024",
    time: "5:00pm",
    amount: -5200,
  },
];

const TransactionCard = ({
  transaction,
}: {
  transaction: TransactionEntry;
}) => (
  <Card className="mb-4 w-full hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div className="space-y-1">
        <Text className="text-base font-medium text-gray-800">
          {transaction.title}
        </Text>
        <div>
          <Text className="text-sm text-gray-600">
            Provider name: {transaction.providerName}
          </Text>
        </div>
        <Text className="text-xs text-gray-500">
          Quantity: {transaction.quantity}, {transaction.location}
        </Text>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
          <ClockCircleOutlined className="text-xs" />
          <Text>{transaction.time}, today</Text>
        </div>
        <Text className="text-red-500 font-medium">-${transaction.amount}</Text>
      </div>
    </div>
  </Card>
);

export default function TransactionHistory() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <Title level={5} className="mb-4">
          Recent
        </Title>
        {recentTransactions.map((transaction, index) => (
          <TransactionCard key={index} transaction={transaction} />
        ))}
      </div>

      <div>
        <Title level={5} className="mb-4">
          Past history
        </Title>
        {pastTransactions.map((transaction, index) => (
          <TransactionCard key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}
