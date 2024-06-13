import { revalidateTag } from "next/cache";

export async function POST(req) {
  const body = await req.json(); // Parse the request body as JSON
  const tag = body?.model; // Extract the 'model' from the parsed body
  console.log(tag);
  const url = new URL(req.url, `http://${req.headers.host}`);
  const secret = url.searchParams.get("secret");

  if (secret !== process.env.SECRET) {
    return Response.json({
      revalidated: false,
      now: Date.now(),
      message: "Invalid Token",
    });
  }
  if (tag) {
    revalidateTag(tag);
    return Response.json({
      revalidated: true,
      now: Date.now(),
    });
  }
  return Response.json(
    {
      revalidated: false,
      now: Date.now(),
    },
    {
      status: 400,
      statusText: "Tag couldn't find",
    }
  );
}
