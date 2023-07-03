import { useEffect, useState } from "react";
import { Post } from "../../types";
import PostCard from "./PostCard";
import { data } from "../../../__mocks__/server";
import { Box, Typography } from "@mui/material";

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
    <Box data-testid="HomePage">
      <Typography variant="h1" textAlign="center" mb={4}>
        My fake blog
      </Typography>
      <Box
        component="section"
        display="flex"
        flexWrap="wrap"
        gap={4}
        justifyContent="flex-start"
      >
        {posts?.map((post) => (
          <PostCard key={`post-${post.id}`} post={post} />
        ))}
      </Box>
    </Box>
  );
}

export default HomePage;
