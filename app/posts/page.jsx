import PostCard from "@/components/PostCard";
import React from "react";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

//React Server Component
async function PostPage() {
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

export default PostPage;
