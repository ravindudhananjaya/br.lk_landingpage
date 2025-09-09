import Hero from "../components/ContactUs/Hero";
import TestimonialCarousel from "../components/home/TestimonialCarousel";
import Footer from "../components/home/Footer";
import Seo from "../components/Seo";
import Reveal from "../components/common/Reveal";
const ContactUs = () => {
  return (
    <div>
      <Seo
                title="Contact Us | BR.LK"
                description="Get in touch with our team for expert guidance on business registration and compliance."
                url="https://br.lk/contact-us"
                image="/br-white.svg"
              />
  <Hero />
  <Reveal variant="fade-up" threshold={0.15}><TestimonialCarousel /></Reveal>
      <Footer />
    </div>
  );
};

export default ContactUs;