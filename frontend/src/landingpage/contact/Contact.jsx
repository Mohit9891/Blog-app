import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Contact Us</h1>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
