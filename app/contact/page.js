'use client';
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Github,
  Linkedin,
  User,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission (e.g., send to API)
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4 py-12 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#c7d2fe" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative bg-white/9 mt-10 w-full max-w-3xl backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 animate-fade-in">
        {/* Contact Info */}
        <div className="md:w-1/2 flex flex-col gap-6 justify-between">
          <div>
            <h2 className="text-4xl font-extrabold text-indigo-700 mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              We’d love to hear from you! Whether you have a question, feedback, or want to collaborate, our team is ready to help. Reach out using the form or the details below.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-gray-700 text-base">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-500" />
              <span>hello@yourblog.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-500" />
              <span>+91 (600) 531-0237</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-indigo-500" />
              <span>123 Blog Avenue, City, Country</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-green-600 font-semibold text-lg py-12">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Thank you for reaching out!<br />We’ll respond as soon as possible.
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400  transition"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400  transition"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 text-indigo-400 w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here..."
                    rows={5}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400  transition resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold text-lg shadow-md hover:from-indigo-600 hover:to-indigo-800 transition transform hover:-translate-y-1 hover:scale-105 duration-150"
              >
                Send Message
              </button>
            </form>
          )}
          <div className="mt-8 text-xs text-gray-400 text-center">
            We respect your privacy. Your information will not be shared.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;