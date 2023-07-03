import React from "react";
import { Post } from "../../types";
import { useNavigate } from "react-router-dom";
import {
  Badge,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { HeartOutline } from "mdi-material-ui";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="post-container"
      onClick={() => {
        navigate(`/posts/${post.id}`);
      }}
      data-testid="PostCard"
      sx={{
        width: "400px",
        maxWidth: "400px",
        minWidth: "400px",
        ":hover": {
          boxShadow: 3,
          cursor: "pointer",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          noWrap
          width="350px"
          textTransform="capitalize"
        >
          {post.title}
        </Typography>
        <Typography variant="caption">{`By: ${post.author.firstName} ${post.author.lastName}`}</Typography>
        <Typography
          className="post-content"
          variant="body1"
          maxHeight={170}
          overflow="hidden"
        >
          {post.content}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", mx: 2 }}>
        <Badge badgeContent={post.likes.length} color="error">
          <HeartOutline color="error" />
        </Badge>
      </CardActions>
    </Card>
  );
};

export default PostCard;
