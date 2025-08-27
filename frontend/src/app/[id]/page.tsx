import { fetchPostById } from "@/actions/api";

interface Props {
  params: { id: string };
}

export default async function PostDetail({ params }: Props) {
  let post;
  const { id } = params;
  console.log("paa: ",params)
  try {
    post = await fetchPostById(id);
    console.log("post: ",post)
  } catch (err) {
    console.error(err);
    return <p className="p-8 text-red-500">Failed to load post.</p>;
  }

  if (!post || !post._id) return <p className="p-8">Post not found.</p>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Black banner */}
      <div className="bg-black h-48 w-full flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
          {post.title}
        </h1>
      </div>

      {/* Content section */}
      <div className="flex-grow max-w-3xl mx-auto p-8">
        <p className="text-gray-500 text-sm mb-4 text-center">
          Author: {post.author || "Anonymous"}
        </p>
        <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </div>
    </div>
  );
}
