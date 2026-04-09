import Layout from "../../components/layout/Layout";

function Contact() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-8 leading-7">
          Have a question, suggestion, or feedback about CareerRoost? We’d love
          to hear from you.
        </p>

        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="6"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          This contact form is currently for frontend display. You can connect
          it to EmailJS, Firebase, or a backend service later.
        </p>
      </div>
    </Layout>
  );
}

export default Contact;