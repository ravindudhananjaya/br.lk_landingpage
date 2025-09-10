import React from "react";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./page/Services";
import Navbar from "./components/home/Navbar";
import Pricing from "./page/Pricing";
import Resources from "./page/Resources";
import About from "./page/About";
import Service from "./page/Service";
import PrivacyPolicy from "./page/PrivacyPolicy";
import ContactUs from "./page/ContactUs";
import Blog from "./page/Blog";
import BlogDetail from "./page/BlogDetail";
import TermsAndConditions from "./page/Terms&Conditions";
import Testimonials from "./page/Testimonials";
import PageTransition from "./components/common/PageTransition";
// Calculator routes
import CalculatorLayout from "./page/Calculator/App.jsx";
import EbayCalculator from "./page/Calculator/EbayCalculator.jsx";
import PaypalCalculator from "./page/Calculator/PaypalCalculator.jsx";
import WiseCalculator from "./page/Calculator/WiseCalculator.jsx";
import AmazonCalculator from "./page/Calculator/AmazonCalculator.jsx";
import NameGenerator from "./page/NameGenerator";
import HSICSearch from "./page/HSICSearch";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/service" element={<PageTransition><Service /></PageTransition>} />
        {/* Exclusions: Privacy Policy and Terms - no transition */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact-us" element={<PageTransition><ContactUs /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
  <Route path="/blog/external" element={<PageTransition><BlogDetail /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogDetail /></PageTransition>} />
        <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
        <Route path="/name-generator" element={<PageTransition><NameGenerator /></PageTransition>} />
        <Route path="/hsic-search" element={<PageTransition><HSICSearch /></PageTransition>} />

        {/* Calculator nested routes */}
        <Route path="/calculator" element={<PageTransition><CalculatorLayout /></PageTransition>}>
          {/* Default calculator page; adjust if a dedicated landing is added */}
          <Route index element={<EbayCalculator />} />
          <Route path="ebay" element={<EbayCalculator />} />
          <Route path="paypal" element={<PaypalCalculator />} />
          <Route path="wise" element={<WiseCalculator />} />
          <Route path="amazon" element={<AmazonCalculator />} />
        </Route>

        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;