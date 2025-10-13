import React from "react";
import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";

interface PageProps {
  params: {
    slug: string;
  };
}

const getPostContent = (slug: string) => {
  try {
    const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error("Error reading file:", error);
    return "Post not found";
  }
};

const PostPage = ({ params }: PageProps) => {
  const slug = params.slug;
  const content = getPostContent(slug);
  return (
    <div>
      <div>{slug}</div>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default PostPage;
