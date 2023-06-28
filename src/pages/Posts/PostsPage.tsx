import { useNavigate, useParams } from "react-router-dom";
import "./PostPage.css";
import { useEffect, useState } from "react";
import { FetchData, FetchStatus, Post } from "../../types";
import PostNotFound from "./PostNotFound";

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
    <div>
      {data.status === FetchStatus.pending && <span>Loading</span>}
      {data.status === FetchStatus.error && postId && (
        <PostNotFound message={data.message} postId={postId} />
      )}
      {data.status === FetchStatus.success && (
        <>
          <button onClick={() => navigate("/")}>Back Home</button>
          <h2>{data.data?.title}</h2>
          <pre>
            By:&nbsp;{data.data?.author.firstName}&nbsp;
            {data.data?.author.lastName}
          </pre>
          <div>
            <p>{data.data?.content}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PostPage;
