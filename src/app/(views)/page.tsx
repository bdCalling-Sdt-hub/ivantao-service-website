import BlurSection from "./homepage/blur-section";
import Categories from "./homepage/categories";
import Feedback from "./homepage/feedback";
import Header from "./homepage/header";
import HowItWorks from "./homepage/how-it-works";
export default function Home() {
  return (
    <>
      <Header />
      <BlurSection />
      <Categories />
      <HowItWorks />
      <Feedback />
    </>
  );
}
