import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Create an Account</h1>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
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
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
