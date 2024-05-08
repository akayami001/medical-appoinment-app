"use client";
import { blogPosts } from "@/app/_mocks_/BlogsData";
import Image from "next/image";

const BlogDetails = ({ params }) => {
  const { blogId } = params;
  const post = blogPosts.find((post) => post.id.toString() === blogId);

  if (!post) {
    return <div>No such blog post found.</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg flex flex-col items-center justify-center p-4">
          <Image
            alt=""
            src={post.image}
            width={270}
            height={100}
            priority
            className="rounded-t-lg mx-auto"
          />
          <time dateTime={post.date} className="block text-xs text-gray-500">
            {post.date}
          </time>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
