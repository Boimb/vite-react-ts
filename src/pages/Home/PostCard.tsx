import React from "react";
import { Post } from "../../types";
import "./PostCard.css";
import { useNavigate } from "react-router-dom";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div
      className="post-container"
      onClick={() => {
        navigate(`/posts/${post.id}`);
      }}
      data-testid="PostCard"
    >
      <h2>{post.title}</h2>
      <pre>{`By: ${post.author.firstName} ${post.author.lastName}`}</pre>
      <p className="post-content">{post.content}</p>
      <div className="post-footer">
        <span>Likes:&nbsp;</span>
        <span>{post.likes.length}</span>
      </div>
    </div>
  );
};

export default PostCard;
