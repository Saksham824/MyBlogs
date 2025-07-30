// app/blog/page.js
import React from "react";
import { Twitter } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from "lucide-react";
import Link from "next/link";

const posts = [
    {
        id: 1,
        slug: "mastering-react-2024",
        title: "Mastering React in 2024",
        excerpt: "Discover the latest best practices and patterns for building robust React applications.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
        author: "Jane Doe",
        authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
        date: "June 10, 2024",
        tags: ["React", "JavaScript", "Frontend"],
        readingTime: "7 min read",
        likes: 120,
        comments: 14,
        category: "Development",
    },

    {
        id: 2,
        slug: "tailwind-css-tips-tricks",
        title: "Tailwind CSS: Tips & Tricks",
        excerpt: "Level up your UI development with these advanced Tailwind CSS techniques.",
        image: "https://template.canva.com/EAGETx38v_8/2/0/1600w-cWqnlvI8ly4.jpg",
        author: "John Smith",
        authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
        date: "June 8, 2024",
        tags: ["Tailwind", "CSS", "Design"],
        readingTime: "5 min read",
        likes: 98,
        comments: 8,
        category: "Design",
    },
    {
        id: 3,
        slug: "building-accessible-web-apps",
        title: "Building Accessible Web Apps",
        excerpt: "Accessibility is crucial. Learn how to make your apps usable for everyone.",
        image: "https://template.canva.com/EAGefAa37Ww/1/0/800w-l47MNeSJQP8.jpg",
        author: "Alex Lee",
        authorAvatar: "https://randomuser.me/api/portraits/men/65.jpg",
        date: "June 5, 2024",
        tags: ["Accessibility", "Web", "Best Practices"],
        readingTime: "6 min read",
        likes: 76,
        comments: 5,
        category: "Best Practices",
    },
    {

        id: 4,
        slug: "nextjs-vs-remix-2024",
        title: "Next.js vs. Remix: The 2024 Showdown",
        excerpt: "A deep dive into the pros and cons of Next.js and Remix for modern web development.",
        image: "https://template.canva.com/EAFhGTLqiWw/2/0/800w-zUUlgcpJzuQ.jpg",
        author: "Sara Kim",
        authorAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
        date: "June 2, 2024",
        tags: ["Next.js", "Remix", "Frameworks"],
        readingTime: "8 min read",
        likes: 143,
        comments: 19,
        category: "Frameworks",
    },
    {
        id: 5,
        slug: "state-management-in-react-2024",
        title: "State Management in React: 2024 Edition",
        excerpt: "Explore the latest state management solutions and when to use them.",
        image: "https://template.canva.com/EAGprgtLHp0/1/2/1600w-437-tzbxQ0U.jpg",
        author: "Mike Brown",
        authorAvatar: "https://randomuser.me/api/portraits/men/77.jpg",
        date: "May 29, 2024",
        tags: ["React", "State", "Redux"],
        readingTime: "9 min read",
        likes: 110,
        comments: 12,
        category: "Development",
    },
    {
        id: 6,
        slug: "ui-ux-trends-2024",
        title: "UI/UX Trends to Watch in 2024",
        excerpt: "Stay ahead of the curve with these emerging UI/UX trends.",
        image: "https://template.canva.com/EAFZwZNdL0E/2/0/1600w-mKj_XMSx26w.jpg",
        author: "Emily Clark",
        authorAvatar: "https://randomuser.me/api/portraits/women/12.jpg",
        date: "May 25, 2024",
        tags: ["UI/UX", "Trends", "Design"],
        readingTime: "4 min read",
        likes: 89,
        comments: 7,
        category: "Design",
    },
    {
        id: 7,
        slug: "building-rest-apis-with-nodejs",
        title: "Building REST APIs with Node.js",
        excerpt: "Learn how to build robust REST APIs using Node.js and Express.",
        image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-infographic_23-2149383349.jpg?uid=R185907587&ga=GA1.1.1748799906.1742576453&semt=ais_hybrid&w=740&q=80",
        author: "Alex Lee",
        date: "June 5, 2024",
        tags: ["Node.js", "APIs"],
        readingTime: "6 min read",
        likes: 76,
        comments: 5,
        category: "Development",
    },

];
const categories = [
    "Development",
    "Design",
    "Best Practices",
    "Frameworks",
    "Accessibility",
    "UI/UX",
];

function BlogCard({ post }) {
    return (
        <div className="dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-zinc-100 dark:border-zinc-800 group bg-white">
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex flex-col h-full">
                <div className="flex gap-2 mb-2 flex-wrap">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-semibold px-2 py-1 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="text-lg font-bold mb-1 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                    {post.title}
                </h2>
                <p className="text-gray-500 dark:text-zinc-300 mb-3 text-sm">{post.excerpt}</p>
                <Link
                    href={`/blogpost/${post.slug}`}
                    className="text-blue-600 text-sm font-semibold hover:underline mb-4"
                >
                    Read More →
                </Link>
                <div className="flex items-center text-xs text-gray-400 dark:text-zinc-400 mb-2 gap-3">
                    <span className="inline-flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        {post.readingTime}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        {post.likes}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"></path></svg>
                        {post.comments}
                    </span>
                </div>
                <div className="flex items-center mt-auto">
                    <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-8 h-8 rounded-full mr-3 border-2 border-blue-100 dark:border-blue-900"
                    />
                    <div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-zinc-200">{post.author}</p>
                        <p className="text-xs text-gray-400 dark:text-zinc-400">{post.date}</p>
                    </div>
                    <span className="ml-auto bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-300 px-2 py-1 rounded text-xs">{post.category}</span>
                </div>
            </div>
        </div>
    );
}

function Sidebar() {
    return (
        <aside className="w-full mt-10 md:w-72 flex-shrink-0 mb-10 md:mb-0">
            <div className="bg-white/8 dark:bg-zinc-900 rounded-xl shadow p-6 mb-6  border-zinc-100 dark:border-zinc-800">
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Categories</h3>
                <ul className="space-y-2">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">{cat}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className=" dark:bg-zinc-900 rounded-xl shadow p-6 mb-6 border border-zinc-100 dark:border-zinc-800">
                <h3 className="font-bold mb-2">Subscribe to our Newsletter</h3>
                <p className=" text-sm mb-4">Get the latest posts delivered right to your inbox.</p>
                <form className="flex flex-col gap-2">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="rounded px-3 py-2 text-sm border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="bg-white text-blue-600 font-semibold rounded py-2 hover:bg-blue-100 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 mt-6 border border-zinc-100 dark:border-zinc-800">
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">DevBlog Highlights</h3>
                <p className="text-sm text-gray-600 dark:text-zinc-400 mb-4">
                    ✨ Discover weekly handpicked articles on React, Tailwind, Next.js, and design principles. Stay ahead with modern development tips and UI trends.
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-zinc-400 space-y-1 mb-4">
                    <li>Curated learning paths</li>
                    <li>Pro tips from experienced devs</li>
                    <li>UI inspiration and component ideas</li>
                    <li>Accessible and performant practices</li>
                </ul>
                <Link
                    href="#"
                    className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    View Highlights
                </Link>
            </div>
        </aside>
    );
}

function MoreFromDevBlog() {
    return (
        <section className="container mx-auto px-6 py-12 mt-12">
            <div className="bg-white/8 rounded-2xl shadow-xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">More from DevBlog</h2>
                    <p className="mb-6 text-lg opacity-90">
                        Want to stay updated with the latest in web development, design, and best practices? Follow us on social media and never miss Link post!
                    </p>
                    <div className="flex gap-4 mb-6">
                        <Link href="#" aria-label="Twitter" className="hover:scale-110 transition">
                            <Twitter className="w-7 h-7" />
                        </Link>
                        <Link href="#" aria-label="GitHub" className="hover:scale-110 transition">
                            <Github className="w-7 h-7" />
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="hover:scale-110 transition">
                            <Linkedin className="w-7 h-7" />
                        </Link>
                    </div>
                    <Link
                        href="#"
                        className="inline-block bg-white text-blue-600 font-bold px-6 py-2 rounded shadow hover:bg-blue-100 transition"
                    >
                        Explore More Posts
                    </Link>
                </div>

                <div className="hidden md:flex flex-1 items-center gap-4">
                    <img
                        src="https://template.canva.com/EAFeXi_fzI8/3/0/1600w-1suLGvcxJTE.jpg"
                        alt="More from DevBlog"
                        className="rounded-xl shadow-lg object-cover w-full h-60"
                    />
                    <div className="">
                        <h4 className="font-semibold text-lg mb-1">Why Follow Us?</h4>
                        <p className="text-sm opacity-90">
                            Get exclusive insights, hand-picked articles, and curated tutorials every week.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}


function BlogPage() {
    return (
        <div className="bg-gray-50 dark:bg-zinc-950 min-h-screen">
            {/* Header */}
            <header className="bg-white dark:bg-zinc-900 shadow">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">DevBlog</span>
                    </div>
                </div>
            </header>

            {/* Featured Post */}
            <section className="container mx-auto px-6 py-12">
                <div className="bg-white/8 rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg relative overflow-hidden">
                    <img
                        src={posts[0].image}
                        alt={posts[0].title}
                        className="w-full md:w-1/3 rounded-xl shadow-md object-cover h-64 border-4 border-white dark:border-zinc-900"
                    />
                    <div className="flex-1 text-white">
                        <div className="mb-2 flex flex-wrap gap-2">
                            {posts[0].tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-blue-900 text-blue-100 dark:bg-blue-700/50 dark:text-blue-300 text-xs font-semibold px-2 py-1 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl text-gray-600 md:text-4xl font-bold mb-4">{posts[0].title}</h1>
                        <p className="mb-6 text-gray-700 text-lg">{posts[0].excerpt}</p>
                        <div className="flex items-center mb-4">
                            <img
                                src={posts[0].authorAvatar}
                                alt={posts[0].author}
                                className="w-10 h-10 rounded-full mr-3 border-2 border-white"
                            />
                            <div>
                                <p className="font-semibold text-gray-600">{posts[0].author}</p>
                                <p className="text-sm text-gray-600">{posts[0].date} &middot; {posts[0].readingTime}</p>
                            </div>
                        </div>
                        <Link
                            href="#"
                            className="inline-block bg-white text-blue-600 font-bold px-6 py-2 rounded shadow hover:bg-blue-100 transition"
                        >
                            Read Featured Post
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-6 flex flex-col md:flex-row gap-10">
                {/* Sidebar */}
                <Sidebar />

                {/* Blog Posts Grid */}
                <section className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Latest Posts</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.slice(1).map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </section>
            </main>

            {/* More from DevBlog Section */}
            <MoreFromDevBlog />
        </div>
    );
}

export default BlogPage;