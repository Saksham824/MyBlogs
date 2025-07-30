import React from "react";
import { Twitter } from 'lucide-react';
import { Github } from 'lucide-react';
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "How to Build a Responsive Blog with React & Tailwind",
    excerpt:
      "Learn how to create a beautiful, responsive blog homepage using React and Tailwind CSS with best practices.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Jane Doe",
    date: "June 10, 2024",
    category: "React",
    tags: ["React", "Tailwind", "Blog"],
  },
  {
    id: 2,
    title: "10 Tips for Writing Clean JavaScript Code",
    excerpt:
      "Improve your JavaScript code quality with these essential tips and tricks for clean, maintainable code.",
    image:
      "https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "John Smith",
    date: "June 8, 2024",
    category: "JavaScript",
    tags: ["JavaScript", "Clean Code", "Tips"],
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS: Advanced Techniques",
    excerpt:
      "Take your Tailwind CSS skills to the next level with these advanced techniques and best practices.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    author: "Alice Johnson",
    date: "June 5, 2024",
    category: "CSS",
    tags: ["Tailwind", "CSS", "Advanced"],
  },
];

const categories = [
  "React",
  "JavaScript",
  "CSS",
  "Web Development",
  "Tutorials",
  "Design",
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-indigo-800/60" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to My Blog
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Insights, tutorials, and resources for modern web developers.
          </p>
          <Link
            href="/blog"
            className="inline-block border-1 text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-white/90 transition"
          >
            Explore Posts
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 flex-1">
        {/* Posts Section */}
        <section className="flex-1" id="posts">
          <h3 className="text-2xl text-gray-700 font-bold mb-6">Featured Posts</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className=" rounded-xl border bg-white/8 shadow hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs uppercase text-blue-500 font-semibold mb-2">
                    {post.category}
                  </span>
                  <h4 className="text-xl font-semibold mb-2 text-gray-700">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href="#"
                    className="mt-4 inline-block text-sm text-blue-600 hover:underline font-semibold"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="w-full mt-13 md:w-72">
          {/* Categories */}
          <div className="border bg-white/8 rounded-lg shadow p-6 mb-8">
            <h5 className="text-lg font-bold mb-4 text-gray-600">Categories</h5>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="#"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Box */}
          <div className="border bg-white/8 rounded-lg shadow p-6 mb-8">
            <h5 className="text-lg text-gray-600 font-bold mb-2">Subscribe</h5>
            <p className="mb-4 text-gray-700 text-sm">
              Get the latest posts delivered right to your inbox.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 placeholder:text-gray-600 py-2 bg-white/10 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-blue-300 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </main>
      
    </div>
  );
}
