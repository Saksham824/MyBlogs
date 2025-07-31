import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import Callout from '@/components/Callout';
import React from 'react';

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  const { content: mdxContent } = await compileMDX({
    source: content,
    components: {
      Callout,
      ul: ({ children }) => (
        <ul>
          {React.Children.map(children, (child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      ),
      ol: ({ children }) => (
        <ol>
          {React.Children.map(children, (child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ol>
      ),
    },
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
      },
    },
  });

  const { title, date, author, authorAvatar } = data;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-900 dark:to-zinc-800 px-4 py-10">
      <div className="max-w-2xl w-full bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center mb-8">
          <img
            src={authorAvatar}
            alt={author}
            className="w-16 h-16 rounded-full mr-6 border-2 border-zinc-300 dark:border-zinc-700 shadow"
          />
          <div>
            <div className="font-bold text-xl dark:text-white">{author}</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">{date}</div>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold mb-8 text-zinc-900 dark:text-white text-center leading-tight">
          {title}
        </h1>

        <article className="prose prose-lg dark:prose-invert max-w-none mx-auto">
          {mdxContent}
        </article>
      </div>
    </div>
  );
}