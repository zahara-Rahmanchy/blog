"use client";

import Link from "next/link";

  const Navbar=()=> {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        Blogs
      </Link>
      <Link
        href="/create"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Blog
      </Link>
    </nav>
  );
}

export default Navbar
