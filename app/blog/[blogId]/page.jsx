"use client";
// import { blogPosts } from "@/app/_mocks_/BlogsData";
import { useEffect, useState } from "react";
import Image from "next/image";
import useFetch from "@/app/hooks/useFetch";

const BlogDetails = ({ params }) => {
  const { blogId } = params;
  // const post = blogPosts.find((post) => post.id.toString() === blogId);
  const { isLoading, error, data } = useFetch(
    `http://localhost:1337/api/blogs/${blogId}`
  );
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (data) {
      setPost(data.data);
    }
  }, [data]);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  if (!post) {
    return <div>No such blog post found.</div>;
  }

  const { attributes } = post;

  return (

    <div className="flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg flex flex-col items-center justify-center p-4">
          {attributes.image && (
            <Image
              alt={attributes.BlogTitle}
              src={attributes.image}
              width={270}
              height={100}
              priority
              className="rounded-t-lg mx-auto"
            />
          )}
          <time dateTime={attributes.BlogDate} className="block text-xs text-gray-500">
            {new Date(attributes.BlogDate).toLocaleDateString()}
          </time>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">
            {attributes.BlogTitle}
          </h3>
          <p className="mt-2 text-sm text-gray-500">{attributes.BlogText}</p>
        </div>
      </div>
    </div>
    // <div className="flex justify-center items-center">
    //   <div className="w-full max-w-md">
    //     <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg flex flex-col items-center justify-center p-4">
    //       <Image
    //         alt={post.title}
    //         src={post.image}
    //         width={270}
    //         height={100}
    //         priority
    //         className="rounded-t-lg mx-auto"
    //       />
    //       <time dateTime={post.date} className="block text-xs text-gray-500">
    //         {post.date}
    //       </time>
    //       <h3 className="mt-2 text-lg font-semibold text-gray-900">
    //         {post.title}
    //       </h3>
    //       <p className="mt-2 text-sm text-gray-500">{post.content}</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BlogDetails;
