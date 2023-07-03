import { useNavigate, useParams } from "react-router-dom";
import PostNotFound from "./PostNotFound";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useGetPostsByIdQuery } from "../../api/api";

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data, isFetching, isError, error } = useGetPostsByIdQuery(
    {
      // We can disable no-non-null-assertion cause skip props force postId to be defined
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      id: postId!,
    },
    { skip: !postId }
  );

  return (
    <Box>
      {isFetching && (
        <Box width="100%" display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      {isError && postId && "status" in error && (
        <PostNotFound postId={postId} />
      )}
      {!isFetching && !isError && (
        <>
          <Box display="flex" justifyContent="flex-end">
            <Button
              data-testid="BackHome-Button"
              variant="outlined"
              onClick={() => navigate("/")}
            >
              Back Home
            </Button>
          </Box>
          <Typography variant="h3" textTransform="uppercase">
            {data?.title}
          </Typography>
          <Typography variant="caption">
            By:&nbsp;{data?.author.firstName}&nbsp;
            {data?.author.lastName}
          </Typography>
          <Typography variant="body1" mt={3}>
            {data?.content}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default PostPage;
