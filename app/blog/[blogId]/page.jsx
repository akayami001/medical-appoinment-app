import Image from "next/image";
import { getBlogById } from "@/app/_utils/GlobalApi";

const BlogDetails = async ({ params }) => {
  const { blogId } = params;
  const data = await getBlogById(blogId);
  const { attributes } = data;

  return (

    <div className="flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg flex flex-col items-center justify-center p-4">
            <Image
              alt={attributes.BlogTitle}
              src={attributes.BlogImage.data.attributes.url}
              width={270}
              height={100}
              priority
              className="rounded-t-lg mx-auto"
            />
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
  );
};

export default BlogDetails;
