/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import {
  Layout,
  Button,
  Input,
  Card,
  Row,
  Col,
  Typography,
  Space,
  Divider,
  theme,
} from "antd";
import Hero from "./hero";
import Features from "./features";
import CoreVal from "./core-val";
import Resources from "./resources";
import Opportunities from "./opportunities";
import Newsletter from "./newsletter";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

export default function Page() {
  const { token } = theme.useToken();

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Core Values Section */}
      <CoreVal />

      {/* Resources Section */}
      <Resources />

      {/* Career Opportunities */}
      <Opportunities />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
