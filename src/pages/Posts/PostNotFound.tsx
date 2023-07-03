import { Alert, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PostNotFound: React.FC<{ postId: string; message: string }> = ({
  postId,
  message,
}) => (
  <Box data-testid="PostNotFound">
    <Alert variant="filled" color="error">
      {`Error while searching for post with id ${postId}`}
      <br />
      {`Reason: ${message}`}
    </Alert>
    <Link to="/">Back Home</Link>
  </Box>
);

export default PostNotFound;
