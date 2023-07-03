import PostCard from "./PostCard";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetPostsQuery } from "../../api/api";

function HomePage() {
  const { isFetching, data } = useGetPostsQuery();
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
        {isFetching && (
          <Box width="100%" display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        )}

        {!isFetching &&
          data?.map((post) => <PostCard key={`post-${post.id}`} post={post} />)}
      </Box>
    </Box>
  );
}

export default HomePage;
