import Hero from "../components/PrivacyPolicy/Hero";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent";
import Footer from "../components/home/Footer";
import Seo from "../components/Seo";
const PrivacyPolicy = () => {
  return (
    <div>
      <Seo
                title="Privacy Policy | BR.LK"
                description="Company formation, compliance, and business support services tailored for international entrepreneurs."
                url="https://br.lk/privacy-policy"
                image="/br-white.svg"
              />
      <Hero />
      <PrivacyPolicyContent />
      <Footer />
      {/* Add more sections or components related to the privacy policy here */}
    </div>
  );
};

export default PrivacyPolicy;