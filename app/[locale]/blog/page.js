import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "../_utils/GlobalApi";

const Blog = async () => {
  const data = await getBlogs();
  return (
    <div className="flex justify-center items-center max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="flex flex-wrap items-center gap-5">
        {data.map((post) => (
          <div
            key={post?.id}
            className="flex flex-wrap overflow-hidden rounded-lg shadow transition hover:shadow-lg p-8 justify-center items-center w-96 h-122 mx-auto"
          >
            <Image
              src={post?.attributes?.BlogImage?.data?.attributes?.url}
              alt={post?.attributes?.BlogTitle}
              width={270}
              height={100}
              className="rounded-t-lg"
            />

            <time
              dateTime={post?.attributes?.BlogDate}
              className="block text-xs text-gray-500 m-1"
            >
              {new Date(post?.attributes?.BlogDate).toLocaleDateString()}
            </time>
            <Link href={`/blog/${post.id}`}>
              <h3 className="mt-0.5 text-base md:text-lg text-gray-900">
                {post?.attributes?.BlogTitle}
              </h3>
            </Link>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              {post?.attributes?.BlogText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
