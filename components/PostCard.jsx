"use client";
import React from "react";

//React client component
const PostCard = ({ post }) => {
  return (
    <div key={post.id}>
      <h3>
        {post.id} {post.title}
      </h3>
      <p>{post.body}</p>
      <button onClick={() => {}}>Click</button>
    </div>
  );
};

export default PostCard;
