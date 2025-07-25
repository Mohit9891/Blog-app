import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-indigo-600">About Us</h1>

        <p className="text-lg mb-4">
          Welcome to <span className="font-semibold">Thoughts</span> – your
          go-to platform to share ideas, explore new perspectives, and connect
          with a vibrant community of thinkers and writers.
        </p>

        <p className="text-lg mb-4">
          Our mission is to empower everyone to express their thoughts
          fearlessly and creatively. Whether you're a seasoned writer or just
          getting started, we provide the tools and space you need to thrive.
        </p>

        <p className="text-lg mb-4">
          Built with ❤️ by a team passionate about writing, tech, and community.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Contact</h2>
          <p>Email: <a href="mailto:contact@thoughts.com" className="text-indigo-600 underline">contact@thoughts.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
