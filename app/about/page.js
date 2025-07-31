'use client'
import Link from "next/link";
import React from "react";

const profiles = [
  {
    name: "Alex Johnson",
    role: "Founder & Editor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Hi! I’m Alex, a passionate writer and developer. I created this blog to share my journey, tips, and resources with fellow enthusiasts. Let’s learn and grow together!",
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    email: "alex@yourblog.com",
  },
  {
    name: "Samantha Lee",
    role: "Content Strategist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Samantha crafts engaging content strategies and ensures our articles are both informative and inspiring. She loves coffee and creative writing.",
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    email: "samantha@yourblog.com",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Michael codes the backbone of our platform and keeps everything running smoothly. He’s a React enthusiast and open-source contributor.",
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    email: "michael@yourblog.com",
  },
  {
    name: "Priya Patel",
    role: "Community Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Priya connects with our readers, manages feedback, and fosters a welcoming community. She enjoys photography and tech meetups.",
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    email: "priya@yourblog.com",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Blog Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            About Our Blog
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Sharing stories, insights, and inspiration.
          </p>
        </div>
      </div>

      {/* Profile Cards */}
      <div className="mt-10 px-4 mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Meet the Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <div
              key={profile.email}
              className="bg-white/8 rounded-2xl shadow-2xl p-8 text-center relative overflow-hidden flex flex-col items-center"
            >
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-transparent to-transparent opacity-60"></div>
              <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-400 via-blue-400 to-purple-400 p-1 shadow-lg">
                <img
                  className="w-full h-full rounded-full border-4 border-white object-cover"
                  src={profile.image}
                  alt={profile.name}
                />
              </div>
              <h3 className="mt-5 text-xl font-bold">{profile.name}</h3>
              <p className="text-indigo-600 font-medium">{profile.role}</p>
              <p className="mt-3 text-gray-600">{profile.bio}</p>
              <div className="mt-5 flex justify-center gap-5">
                <Link
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.09 4.07 7.38 1.64 4.89c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54a4.23 4.23 0 0 1-1.94-.54v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z" />
                  </svg>
                </Link>
                <Link
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-900 transition"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.58 22 16.76 22 12.26 22 6.58 17.52 2 12 2z" />
                  </svg>
                </Link>
                <Link
                  href={`mailto:${profile.email}`}
                  className="text-red-500 hover:text-red-700 transition"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Values */}
      <div className="mt-14 mb-10 px-4 md:px-0 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Our Mission
        </h3>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          To empower readers with insightful articles, practical guides, and inspiring stories. We believe in the power of community, learning, and sharing knowledge.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white/8 rounded-xl shadow-lg p-7 hover:shadow-2xl transition group">
            <div className="bg-indigo-100 rounded-full p-3 mb-3 group-hover:bg-indigo-200 transition">
              {/* Pencil Icon */}
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 1 1 3.182 3.182L7.5 19.213l-4 1 1-4 12.362-12.726z" />
              </svg>
            </div>
            <h4 className="font-bold text-indigo-700 mb-2 text-lg">Quality Content</h4>
            <p className="text-gray-600">
              Every post is carefully crafted to provide value and actionable insights.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white/8 rounded-xl shadow-lg p-7 hover:shadow-2xl transition group">
            <div className="bg-blue-100 rounded-full p-3 mb-3 group-hover:bg-blue-200 transition">
              {/* Users Icon */}
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm6 13v-2a4 4 0 0 0-3-3.87M6 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-blue-700 mb-2 text-lg">Community Focus</h4>
            <p className="text-gray-600">
              We encourage discussion, feedback, and collaboration among our readers.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white/8 rounded-xl shadow-lg p-7 hover:shadow-2xl transition group">
            <div className="bg-purple-100 rounded-full p-3 mb-3 group-hover:bg-purple-200 transition">
              {/* Book Open Icon */}
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v15l9-2z" />
              </svg>
            </div>
            <h4 className="font-bold text-purple-700 mb-2 text-lg">Continuous Learning</h4>
            <p className="text-gray-600">
              Stay updated with the latest trends, tools, and best practices.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center bg-white/8 rounded-xl shadow-lg p-7 hover:shadow-2xl transition group">
            <div className="bg-green-100 rounded-full p-3 mb-3 group-hover:bg-green-200 transition">
              {/* Light Bulb Icon */}
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a7 7 0 0 0-7 7c0 3.53 2.61 6.43 6 6.92V21h2v-4.08c3.39-.49 6-3.39 6-6.92a7 7 0 0 0-7-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-green-700 mb-2 text-lg">Innovation</h4>
            <p className="text-gray-600">
              We embrace creativity and new ideas to keep our content fresh and relevant.
            </p>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col items-center bg-white/8 rounded-xl shadow-lg p-7 hover:shadow-2xl transition group">
            <div className="bg-yellow-100 rounded-full p-3 mb-3 group-hover:bg-yellow-200 transition">
              {/* Heart Icon */}
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
              </svg>
            </div>
            <h4 className="font-bold text-yellow-700 mb-2 text-lg">Passion</h4>
            <p className="text-gray-600">
              Our love for writing and technology drives everything we do.
            </p>
          </div>         
          </div>
      </div>
    </div>
  );
}
