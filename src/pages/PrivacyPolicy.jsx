import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
    <Header />
    
    <div className="bg-pastel text-primary font-serifStyle min-h-screen py-10 px-6 md:px-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-semibold text-darkBrown border-b pb-4 border-secondary">
          Privacy Policy
        </h1>

        <p className="c">
          Folklore Production is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website or use our services.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-2 eb-regular">Personal Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1 c">
            <li>Contact information, such as your name, email address, and phone number.</li>
            <li>Demographic information, such as your age, gender, and interests.</li>
            <li>Information about your interactions with our website and services, such as the pages you visit and the videos you watch.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-2 eb-regular">How We Use Your Personal Information</h2>
          <ul className="list-disc list-inside space-y-1 c">
            <li>Provide you with our services.</li>
            <li>Communicate with you about your account and our services.</li>
            <li>Send you marketing materials about our products and services.</li>
            <li>Personalize your experience on our website and services.</li>
            <li>Improve our website and services.</li>
            <li>Comply with applicable laws and regulations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-2 eb-regular">Sharing Your Personal Information</h2>
          <ul className="list-disc list-inside space-y-1 c">
            <li>Our third-party service providers, who help us provide our services, such as hosting our website and processing payments.</li>
            <li>Advertising partners, who help us show you relevant ads.</li>
            <li>Legal and regulatory authorities, if required by law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-2 eb-regular">Your Choices</h2>
          <p className="c">
            You can choose not to provide us with certain personal information, but this may prevent you from using some of our services.
          </p>
          <p className="c">
            You can also opt out of receiving marketing emails from us by clicking on the “unsubscribe” link in any marketing email.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-2 eb-regular">Your Rights</h2>
          <p className="c">
            You have the right to access, correct, delete, and restrict the processing of your personal information. You also have the right to port your data and to lodge a complaint with the data protection authority.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-2 eb-regular">How to Contact Us</h2>
          <p className="c">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:Productionfolklore@gmail.com" className="text-darkBrown underline hover:text-primary">
              Productionfolklore@gmail.com
            </a> – Folklore Production
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-2 eb-regular">Changes to This Privacy Policy</h2>
          <p className="c">
            We may update this Privacy Policy from time to time. The most recent version will always be posted on our website.
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
