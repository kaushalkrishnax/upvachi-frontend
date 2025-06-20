import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Overview from "../components/landing/Overview";
import Platforms from "../components/landing/Platforms";
import Testimonials from "../components/landing/Testimonials";
import UseCases from "../components/landing/UseCases";
import Pricing from "../components/landing/Pricing";
import FAQ from "../components/landing/FAQ";
import Footer from "../components/landing/Footer";

function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <Platforms />
      <Testimonials />
      <UseCases />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default Landing;
