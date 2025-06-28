import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ProductiveIllustration from "../assets/icons/productiveIllustration.svg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-lime-50 px-6 py-16 md:px-24 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            About <span className="text-lime-500">ToDoPy</span>
          </h1>
          <p className="text-lg text-gray-600">
            Stay Organized. Stay Inspired. Built for the modern workflow.
          </p>
        </div>

        {/* Mission Section */}
        <div
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
          data-aos="fade-up"
        >
          <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              🚀 Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ToDoPy empowers individuals to manage their time, energy, and
              tasks with clarity and confidence. Our minimalist design and
              powerful features let you focus on what truly matters.
            </p>
          </div>
          <img
            src={ProductiveIllustration}
            alt="Productivity Illustration"
            className="hidden md:block"
          />
        </div>

        {/* Features Section */}
        <div
          className="bg-white bg-opacity-60 backdrop-blur-lg rounded-xl p-8 shadow-lg mb-20"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🌟 Why ToDoPy?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <ul className="space-y-4 list-disc list-inside">
              <li>
                <strong>Clean & Elegant:</strong> Intuitive UI with a focus on
                productivity.
              </li>
              <li>
                <strong>Real-Time Sync:</strong> Access your tasks across all
                devices instantly.
              </li>
              <li>
                <strong>Smart Prioritization:</strong> Label, color-code, and
                organize tasks with ease.
              </li>
              <li>
                <strong>Dark Mode Ready:</strong> Designed for eyes that work
                late.
              </li>
            </ul>
            <ul className="space-y-4 list-disc list-inside">
              <li>
                <strong>Custom Reminders:</strong> Never miss what's important.
              </li>
              <li>
                <strong>Cloud Storage:</strong> Your tasks are always backed up
                securely.
              </li>
              <li>
                <strong>Collaboration Coming Soon:</strong> Share projects and
                lists with others.
              </li>
              <li>
                <strong>Fast, Secure & Lightweight:</strong> Built with modern
                tech stacks.
              </li>
            </ul>
          </div>
        </div>

        {/* Creator */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            👨‍💻 Meet the Creator
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Developed by <strong>Burhan Ahmad</strong>, a passionate full-stack
            web developer who believes in building tools that make everyday life
            simpler, cleaner, and more impactful.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            💬 User Feedback
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-70 p-6 rounded-xl shadow">
              <p className="italic text-gray-600 mb-2">
                “ToDoPy transformed how I plan my day. I’ve never been this
                organized.”
              </p>
              <p className="text-sm font-medium text-right text-gray-500">
                — Sara, UX Designer
              </p>
            </div>
            <div className="bg-white bg-opacity-70 p-6 rounded-xl shadow">
              <p className="italic text-gray-600 mb-2">
                “Sleek, simple, and powerful. It's my go-to productivity tool.”
              </p>
              <p className="text-sm font-medium text-right text-gray-500">
                — David, Startup Founder
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="zoom-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ✅ Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/signup"
              className="bg-lime-500 hover:bg-lime-600 px-6 py-3 rounded-lg font-medium shadow transition"
            >
              Create Your Account
            </Link>
            <Link
              to="/login"
              className="text-lime-600 underline font-medium hover:text-lime-700 transition"
            >
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
