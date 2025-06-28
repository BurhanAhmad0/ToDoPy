import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g. send to backend or API)
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-lime-50 px-6 py-16 md:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact <span className="text-lime-500">Us</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Got a question, idea, or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white bg-opacity-60 backdrop-blur-lg shadow-lg rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500 bg-white bg-opacity-80"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500 bg-white bg-opacity-80"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500 bg-white bg-opacity-80 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="cursor-pointer bg-lime-500 hover:bg-lime-600 text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Footer note */}
        <div className="text-center text-sm text-gray-500 mt-12">
          Built with ❤️ by Burhan Ahmad • Full Stack Developer
        </div>
      </div>
    </div>
  );
};

export default Contact;
