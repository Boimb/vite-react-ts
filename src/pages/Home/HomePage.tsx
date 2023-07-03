import { useEffect, useState } from "react";
import { Post } from "../../types";
import PostCard from "./PostCard";
import { data } from "../../../__mocks__/server";

function HomePage() {
  const [posts, setPosts] = useState<Post[]>();
  useEffect(() => {
    fetch(`/api/posts/`)
      .then((res) => res.json())
      .then((json: Post[]) => {
        setPosts(json.filter(({ author }) => author.id === data.john.id));
      });
  }, []);

  return (
    <div className="main" data-testid="HomePage">
      <h1>My fake blog</h1>
      <section className="post-list">
        {posts?.map((post) => (
          <PostCard key={`post-${post.id}`} post={post} />
        ))}
      </section>
    </div>
  );
}

export default HomePage;
