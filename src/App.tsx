import B2bProduct from "./components/B2bProduct";
import BlogSection from "./components/BlogSection";
import CallToAction from "./components/CallToAction";
import FeaturesSlider from "./components/FeaturesSlider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Spotlight from "./components/Spotlight";
import StatsSection from "./components/StatsSection";
import Testimonies from "./components/Testimonies";

function App() {
  return (
    <div className="text-outfit">
      <Header />
      <Hero />
      <FeaturesSlider direction="left" />
      <FeaturesSlider direction="right" />
      <Testimonies />
      <Spotlight />
      <B2bProduct />
      <StatsSection />
      <BlogSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
