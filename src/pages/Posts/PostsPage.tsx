import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FetchData, FetchStatus, Post } from "../../types";
import PostNotFound from "./PostNotFound";
import { Box, Button, Typography } from "@mui/material";

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<FetchData<Post>>({
    status: FetchStatus.pending,
    message: "",
  });

  useEffect(() => {
    fetch(`/api/posts/${postId}`)
      .then(async (res) => {
        if (res.status === 200) {
          const post = await res.json();
          return {
            status: FetchStatus.success,
            data: post,
            message: "",
          };
        }
        return {
          status: FetchStatus.error,
          message: "Could not find post",
        };
      })
      .then((v: FetchData<Post>) => {
        setData(v);
      });
  }, [postId]);

  return (
    <Box>
      {data.status === FetchStatus.pending && <span>Loading</span>}
      {data.status === FetchStatus.error && postId && (
        <PostNotFound message={data.message} postId={postId} />
      )}
      {data.status === FetchStatus.success && (
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
            {data.data?.title}
          </Typography>
          <Typography variant="caption">
            By:&nbsp;{data.data?.author.firstName}&nbsp;
            {data.data?.author.lastName}
          </Typography>
          <Typography variant="body1" mt={3}>
            {data.data?.content}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default PostPage;
