import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const getPostMetadata = () => {
  const folder = "posts";
  const files = fs.readdirSync(folder);
  const markdown = files.filter((file) => file.endsWith(".md"));
  const slugs = markdown.map((file) => file.replace(".md", ""));
  return slugs;
};

export default function Home() {
  const postMetaData = getPostMetadata();
  const postPreViews = postMetaData.map((slug) => (
    <div>
      <Link href={`blogs/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));
  return <div>{postPreViews}</div>;
}
