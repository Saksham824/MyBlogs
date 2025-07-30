// app/blogpost/[slug]/page.js
import React from "react";
import ReactMarkdown from "react-markdown";

const markdownContent = `
# Welcome to My Blog Post

This is a sample blog post written in **Markdown**.

- Responsive design
- Author info
- Date and more!

> "Great things are done by a series of small things brought together."  
> — Vincent Van Gogh

## More Content

Stay tuned for more updates!
`;

export default function Page({ params }) {
  // Example metadata
  const author = {
    name: "Jane Doe",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  };
  const date = "2024-06-15";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-900 dark:to-zinc-800 px-2">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl max-w-2xl w-full p-6 md:p-10">
        {/* Header */}
        <div className="flex items-center mb-6">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full border-2 border-zinc-300 dark:border-zinc-700 mr-4"
          />
          <div>
            <div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{author.name}</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">{new Date(date).toLocaleDateString()}</div>
          </div>
        </div>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-zinc-900 dark:text-zinc-100">
          Blog Post: <span className="text-blue-600 dark:text-blue-400">{params.slug}</span>
        </h1>
        {/* Markdown Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none mb-6">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
        {/* Footer */}
        <div className="text-center text-zinc-500 dark:text-zinc-400 text-sm">
          More content will be added here soon!
        </div>
      </div>
    </div>
  );
}