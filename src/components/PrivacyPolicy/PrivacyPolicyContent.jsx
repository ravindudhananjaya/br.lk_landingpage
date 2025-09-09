import React from "react";

const PrivacyPolicyContent = () => {
  const sections = [
    {
      number: "1",
      title: "Information we Collect",
      content: (
        <>
          <p className="mb-6">
            When you interact with our website or use our services, we may collect the following types of information:
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Personal Information:</strong> This includes details like your name, email address, phone number, and billing information when you sign up for our services or contact us.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> This includes data like your IP address, browser type, operating system, and browsing behavior. We use this data to analyze site usage and improve our services.
            </li>
            <li>
              <strong>Cookies:</strong> We may use cookies to enhance your experience on our website. Cookies are small data files stored on your device to help us recognize you and optimize your experience.
            </li>
          </ul>
        </>
      ),
      bgColor: "bg-white"
    },
    {
      number: "2",
      title: "How We Use Your Information",
      content: (
        <p>
          We use the information we collect for various purposes. This includes delivering the services you have requested, processing payments, and managing your account. We also use your data to communicate with you, send updates, respond to inquiries, and provide customer support. Information collected is analyzed to improve our services and develop new features. With your consent, we may occasionally send you promotional offers or marketing emails, which you can opt-out of at any time.
        </p>
      ),
      bgColor: "bg-[#f3ede6]"
    },
    {
      number: "3",
      title: "Sharing Your Information",
      content: (
        <p>
          We do not sell or rent your personal information to third parties. However, there are instances where we may need to share your information. We may share data with trusted service providers who help us operate our business, such as payment processors or cloud storage services. These providers are required to maintain the confidentiality of your data. Additionally, we may share your information to comply with legal requirements if we are legally obligated to do so or in response to requests from public authorities.
        </p>
      ),
      bgColor: "bg-white"
    },
    {
      number: "4",
      title: "How We Protect Your Information",
      content: (
        <>
          <p className="mb-4">
            At BR.LK, we take data security seriously and implement several security measures to protect your personal information from unauthorized access, alteration, or disclosure. We use encryption, secure servers, and strict data access controls to safeguard your information.
          </p>
          <p>
            While we strive to protect your data, it's important to note that no method of internet transmission is completely secure, though we do everything we can to ensure your data's safety.
          </p>
        </>
      ),
      bgColor: "bg-[#f3ede6]"
    },
    {
      number: "5",
      title: "Your Rights",
      content: (
        <>
          <p className="mb-4">
            You have rights regarding the personal information we hold about you. You can request access to your data, and if any of it is inaccurate, you have the right to request correction. If you wish, you can ask us to delete your personal data, subject to any legal obligations we may have.
          </p>
          <p>
            You can also opt-out of receiving marketing communications from us at any time by following the instructions in the emails or by contacting us directly.
          </p>
        </>
      ),
      bgColor: "bg-white"
    },
    {
      number: "6",
      title: "Retention of Data",
      content: (
        <p>
          We keep your personal data for as long as necessary to provide our services or as required by law. Once your information is no longer needed, we will securely delete or anonymize it to ensure your privacy is maintained.
        </p>
      ),
      bgColor: "bg-[#f3ede6]"
    },
    {
      number: "7",
      title: "Third-Party Links",
      content: (
        <p>
          Our website may contain links to third-party websites. Please note that this privacy policy applies only to the BR.LK website, and we are not responsible for the privacy practices or content of third-party sites.
        </p>
      ),
      bgColor: "bg-white"
    },
    {
      number: "8",
      title: "Changes to This Policy",
      content: (
        <p>
          We may update this privacy policy from time to time. If we make changes, they will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your data.
        </p>
      ),
      bgColor: "bg-[#f3ede6]"
    },
    {
      number: "9",
      title: "Contact Us",
      content: (
        <p>
          If you have any questions or concerns about this privacy policy or if you want to exercise any of your rights regarding your personal data, please feel free to contact us at privacy@br.lk or by mail at 123 Finance Street, Business City, BC 12345.
        </p>
      ),
      bgColor: "bg-white"
    }
  ];

  return (
    <section className="py-0">
      <div className="max-w-[1150px] mx-auto">
        {sections.map((section, index) => (
          <div key={index} className={`${section.bgColor} rounded-3xl py-12 px-4 lg:px-8 mx-4 mb-6`}>
            <div className="max-w-5xl mx-auto">
              {/* Section Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0">
                  <span className="font-serif font-bold text-6xl lg:text-7xl text-[#232323]">
                    {section.number}.
                  </span>
                </div>
                <div className="flex-1 pt-2">
                  <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#232323] leading-tight">
                    {section.title}
                  </h2>
                  {/* Underline - Dynamic width based on title */}
                  <div 
                    className="h-0.5 bg-[#232323] mt-4"
                    style={{ width: `${section.title.length * 0.6}em` }}
                  ></div>
                </div>
              </div>

              {/* Section Content */}
              <div className="text-gray-700 text-base lg:text-lg leading-relaxed">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicyContent;