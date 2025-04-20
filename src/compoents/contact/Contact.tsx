import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ap5iahi", // replace with your EmailJS service ID
        "template_3two76l", // replace with your EmailJS template ID
        formRef.current!,
        "9FJ_P1S4grlMzKWs1" // replace with your public key (user ID)
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 via-white to-pink-50 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-semibold text-indigo-800 mb-8 text-center">
          Contact Us
        </h1>

        <p className="text-lg text-gray-600 mb-8 text-center">
          We'd love to hear from you! Whether you have a question about
          products, pricing, or anything else, our team is ready to help.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="flex-1 text-lg text-gray-600 space-y-6">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:Sudarshancosmetics@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                Sudarshancosmetics@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+918217744234"
                className="text-indigo-600 hover:underline"
              >
                +91 8217744234
              </a>
            </p>
            <p>
              <strong>Address:</strong> Shirpur, Maharashtra, India
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Send Us A Message
            </h2>

            {isSent ? (
              <div className="text-green-600 font-medium text-center">
                ✅ Your message has been sent successfully!
              </div>
            ) : (
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Your message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
