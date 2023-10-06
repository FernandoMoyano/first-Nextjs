"use client";
import React from "react";
import Link from "next/link";

//React client component
const PostCard = ({ post }) => {
  return (
    <div key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h3>
          {post.id} {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <button onClick={() => {}}>Click</button>
    </div>
  );
};

export default PostCard;
