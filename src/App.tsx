import { useEffect, useState } from "react";
import { johnId } from "../__mocks__/db";
import { Post } from "./types";
import PostCard from "./PostCard";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    fetch(`/posts/`)
      .then((res) => res.json())
      .then((json: Post[]) => {
        setPosts(json.filter(({ author }) => author.id === johnId));
      });
  }, []);

  return (
    <div className="main">
      <h1>My fake blog</h1>
      <section className="post-list">
        {posts?.map((post) => (
          <PostCard key={`post-${post.id}`} post={post} />
        ))}
      </section>
    </div>
  );
}

export default App;
