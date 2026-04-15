import { useState } from "react";
import Layout from "../../components/layout/Layout";
import SectionHeading from "../../components/common/SectionHeading";
import SeoHead from "../../components/seo/SeoHead";
import Breadcrumbs from "../../components/common/Breadcrumbs";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <Layout>
      <SeoHead
        title="Contact CareerRoost | Get in Touch"
        description="Contact CareerRoost for feedback, suggestions, or inquiries about visa sponsorship opportunities."
        canonical="/contact"
      />

      <div className="px-4 py-10 max-w-4xl mx-auto space-y-8">

        {/* ✅ Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Contact" },
          ]}
        />

        {/* HEADER */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>

          <p className="text-gray-600 leading-7">
            Have a question, suggestion, or feedback about CareerRoost? We’d love
            to hear from you.
          </p>
        </div>

        {/* CONTACT BOX */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">

          {/* SUCCESS MESSAGE */}
          {submitted ? (
            <div className="text-center space-y-4">
              <p className="text-green-600 font-medium text-lg">
                ✅ Message sent successfully!
              </p>

              <p className="text-gray-500 text-sm">
                We’ll get back to you within 24–48 hours.
              </p>

              <button
                onClick={handleReset}
                className="mt-3 text-blue-600 hover:underline text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* NAME */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  required
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* EXTRA INFO */}
        <div className="bg-slate-50 border rounded-2xl p-6">
          <SectionHeading title="Other Ways to Reach Us" align="left" />

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>📧 Email: contact@careerroost.com</p>
            <p>🌐 Website: CareerRoost</p>
            <p>⏱️ Response time: 24–48 hours</p>
          </div>
        </div>

        {/* DISCLAIMER */}
        <p className="text-sm text-gray-500">
          This contact form is currently for demonstration purposes. You can
          connect it to EmailJS, Firebase, or a backend service to handle real
          messages.
        </p>

      </div>
    </Layout>
  );
}

export default Contact;