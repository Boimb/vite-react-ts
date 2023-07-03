import React from "react";
import { Link } from "react-router-dom";

const PostNotFound: React.FC<{ postId: string; message: string }> = ({
  postId,
  message,
}) => (
  <div data-testid="PostNotFound">
    <p>Error while searching for post with id {postId}</p>
    <p>Reason: {message}</p>
    <Link to="/">Back Home</Link>
  </div>
);

export default PostNotFound;
