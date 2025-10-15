import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

interface PostMetadata {
  title: string;
  subtitle: string;
  slug: string;
}

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default function Home() {
  const posts = getPostMetadata();
  const postPreviews = posts.map((post) => (
    <div
      key={post.slug}
      className="bg-white hover:bg-gray-50 transition-colors duration-200 p-6"
    >
      <Link href={`blogs/${post.slug}`} className="block">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
          {post.title}
        </h2>
        <p className="text-gray-600">{post.subtitle}</p>
      </Link>
    </div>
  ));

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="divide-y divide-gray-200 rounded-lg bg-white shadow">
        {postPreviews}
      </div>
    </div>
  );
}
