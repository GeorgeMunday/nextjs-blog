import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PageProps {
  params: {
    slug: string;
  };
}

const cleanMarkdown = (content: string) => {
  return content
    .replace(/#{1,6}\s/g, "") // Remove headings
    .replace(/`{1,3}/g, "") // Remove code blocks
    .replace(/\*\*/g, "") // Remove bold
    .replace(/\*/g, "") // Remove italic
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Clean links to just text
    .replace(/^\s*[-+*]\s/gm, "") // Remove list markers
    .replace(/^\s*\d+\.\s/gm, ""); // Remove numbered lists
};

const getPostContent = (slug: string) => {
  try {
    const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content } = matter(fileContent);
    return cleanMarkdown(content);
  } catch (error) {
    console.error("Error reading file:", error);
    return "Post not found";
  }
};

const PostPage = ({ params }: PageProps) => {
  const slug = params.slug;
  const content = getPostContent(slug);
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <article className="prose lg:prose-xl">
        {content.split("\n").map((paragraph, idx) =>
          paragraph.trim() ? (
            <p key={idx} className="my-4">
              {paragraph}
            </p>
          ) : null
        )}
      </article>
    </div>
  );
};

export default PostPage;
