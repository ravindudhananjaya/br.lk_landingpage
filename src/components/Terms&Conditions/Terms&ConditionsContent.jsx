import React from 'react'

const TermsAndConditionsContent = () => {
  const sections = [
    {
      number: "1",
      title: "Acceptance of Terms",
      content: (
        <>
          <p className="mb-4">
            By accessing and using BR.LK's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please discontinue use of our services immediately.
          </p>
          <p>
            These terms constitute a legally binding agreement between you and BR.LK. Your continued use of our services indicates your ongoing acceptance of any updates or modifications to these terms.
          </p>
        </>
      ),
      bgColor: "bg-white"
    },
    {
      number: "2",
      title: "Service Description",
      content: (
        <>
          <p className="mb-6">
            BR.LK provides comprehensive business and financial consulting services designed to help entrepreneurs establish and manage their global business presence. Our services include but are not limited to:
          </p>
          <ul className="space-y-2">
            <li>• Company formation and registration services</li>
            <li>• Business licensing and regulatory compliance assistance</li>
            <li>• Corporate governance and administrative support</li>
            <li>• Consultation on business structures and jurisdictional advantages</li>
            <li>• Ongoing compliance and reporting services</li>
          </ul>
          <p className="mt-6">
            We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with appropriate notice to affected users.
          </p>
        </>
      ),
      bgColor: "bg-[#f3ede6]"
    },
    {
      number: "3",
      title: "User Responsibilities",
      content: (
        <>
          <p className="mb-6">
            As a user of our services, you agree to provide accurate, complete, and current information during the registration process and throughout your engagement with our services. You are responsible for:
          </p>
          <ul className="space-y-2">
            <li>• Maintaining the confidentiality of your account credentials</li>
            <li>• Ensuring all information provided is truthful and up-to-date</li>
            <li>• Complying with all applicable laws and regulations in your jurisdiction</li>
            <li>• Properly notifying us of any unauthorized use of your account</li>
            <li>• Using our services only for lawful business purposes</li>
          </ul>
        </>
      ),
      bgColor: "bg-white"
    },
    {
      number: "4",
      title: "Payment Terms",
      content: (
        <>
          <p className="mb-6">
            Payment for our services is due according to the schedule outlined in your service agreement. We accept various payment methods as indicated during the billing process. Payment terms include:
          </p>
          <ul className="space-y-2">
            <li>• All fees are payable in advance unless otherwise agreed in writing</li>
            <li>• Prices are subject to change with 30 days' notice</li>
            <li>• Refunds are processed according to our refund policy</li>
            <li>• Late payments may incur additional charges and service suspensions</li>
            <li>• All payments are processed securely through recognized channels</li>
          </ul>
          <p className="mt-6">
            In the event of non-payment, we reserve the right to suspend services and pursue collection through appropriate legal channels.
          </p>
        </>
      ),
      bgColor: "bg-[#f3ede6]"
    },
    {
      number: "5",
      title: "Intellectual Property",
      content: (
        <>
          <p className="mb-4">
            All content, materials, service marks, trade names, logos, and intellectual property displayed on our website and in our services are the property of BR.LK or our licensors. You may not use, reproduce, or distribute any of this intellectual property without express written permission.
          </p>
          <p>
            You retain ownership of any information or documents you provide to us, while granting us the necessary licenses to provide our services. However, the content, methodologies, and systems we use to deliver services remain our intellectual property.
          </p>
        </>
      ),
      bgColor: "bg-white"
    },
    {
      number: "6",
      title: "Limitation of Liability",
      content: (
        <>
          <p className="mb-4">
            BR.LK provides services on an "as-is" basis. While we strive to deliver excellent service, we cannot guarantee uninterrupted or error-free service. Our liability is limited to the maximum extent permitted by law.
          </p>
          <p>
            Our total liability for any claims related to our services shall not exceed the amount you have paid for the specific service giving rise to the claim.
          </p>
        </>
      ),
      bgColor: "bg-[#f3ede6]"
    },
    {
      number: "7",
      title: "Service Limitations",
      content: (
        <>
          <p className="mb-4">
            While we provide expert guidance and support, we do not provide legal, tax, or financial advice. Our services are administrative in nature and informational, requiring you to seek qualified professionals for specific legal or financial matters.
          </p>
          <p>
            We are not responsible for decisions made by regulatory authorities, changes in laws or regulations, or delays caused by third-party service providers or government agencies.
          </p>
        </>
      ),
      bgColor: "bg-white"
    },
    {
      number: "8",
      title: "Prohibited Uses",
      content: (
        <>
          <p className="mb-6">
            You agree not to use our services for any unlawful or prohibited activities, including but not limited to:
          </p>
          <ul className="space-y-2">
            <li>• Money laundering or other financial crimes</li>
            <li>• Tax evasion or fraudulent activities</li>
            <li>• Tax evasion or fraudulent activities</li>
            <li>• Activities that violate intellectual property rights</li>
            <li>• Any business activities illegal in the jurisdiction of incorporation</li>
          </ul>
          <p className="mt-6">
            We reserve the right to refuse service or terminate existing services if we suspect any prohibited use of our platform.
          </p>
        </>
      ),
      bgColor: "bg-[#f3ede6]"
    },
    {
      number: "9",
      title: "Termination",
      content: (
        <>
          <p className="mb-6">
            Either party may terminate this agreement with appropriate notice as specified in your service agreement. Upon termination:
          </p>
          <ul className="space-y-2">
            <li>• All outstanding fees become immediately due</li>
            <li>• Access to our platforms and services will be discontinued</li>
            <li>• We will provide final documentation as required</li>
            <li>• Confidentiality obligations continue indefinitely</li>
          </ul>
          <p className="mt-6">
            We may terminate services immediately in cases of breach of terms, non-payment, or suspected illegal activity.
          </p>
        </>
      ),
      bgColor: "bg-white"
    },
    {
      number: "10",
      title: "Governing Law",
      content: (
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of Sri Lanka. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.
        </p>
      ),
      bgColor: "bg-[#f3ede6]"
    },
    {
      number: "11",
      title: "Changes to Terms",
      content: (
        <>
          <p className="mb-4">
            We may update these Terms and Conditions from time to time to reflect changes in our services, legal requirements, or business practices. When we make changes, they will be posted on this page with an updated effective date.
          </p>
          <p>
            We encourage you to review these terms periodically to stay informed about how we are protecting your interests and governing our business relationship.
          </p>
        </>
      ),
      bgColor: "bg-white"
    },
    {
      number: "12",
      title: "Contact Information",
      content: (
        <>
          <p className="mb-6">
            If you have any questions or concerns about these Terms and Conditions, or if you need to report a balance charge that has to contact us:
          </p>
          <div className="space-y-2">
            <p><strong>Email:</strong> legal@br.lk</p>
            <p><strong>Address:</strong> 123 Finance Street, Business City, BC 12345</p>
            <p><strong>Phone:</strong> +94 11 234 5678</p>
            <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM GMT +5:30</p>
          </div>
          <p className="mt-6">
            We are committed to addressing your concerns promptly and professionally. For urgent matters, please indicate the priority level in your communication.
          </p>
        </>
      ),
      bgColor: "bg-[#f3ede6]"
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
}

export default TermsAndConditionsContent