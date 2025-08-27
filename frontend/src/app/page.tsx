import React from 'react'
import Link from "next/link";
import { fetchPosts } from '@/actions/api';

const  Home = async()=> {
  const posts = await fetchPosts();
  console.log("post: ",posts)

  return (
    <div className="p-8 space-y-6">
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <div
            key={post._id}
            className="flex bg-white shadow-lg rounded overflow-hidden"
          >
            {/* Left black block */}
            <div className="w-24 bg-black flex-shrink-0"></div>

            {/* Right content */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-2">
                  {post.content.length > 100
                    ? post.content.substring(0, 100) + "..."
                    : post.content}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Author: {post.author || "Anonymous"}
                </p>
              </div>
              <div>
                <Link
                  href={`/${post._id}`}
                  className="inline-block bg-blue-900 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  View Blog
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home