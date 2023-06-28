import React from "react";
import { Post } from "./types";
import "./PostCard.css";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="post-container">
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
