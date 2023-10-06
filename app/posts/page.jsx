import PostCard from "@/components/PostCard";
import React from "react";
import { resolve } from "styled-jsx/css";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return data;
}

//React Server Component
async function Posts() {
  const posts = await loadPosts();
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
