import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import PostFeed from "../components/PostFeed";
import axios from "axios";
import instance from "../api/axios";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    instance
      .get("/posts/get-all-posts", { withCredentials: true })
      .then((res) => setPosts(res.data.data));
  }, [refresh]);

  const handleCreatePost = (content, reset) => {
    instance
      .post("/posts/create-post", { content }, { withCredentials: true })
      .then(() => {
        setRefresh((val) => !val);
        reset("");
      });
  };

  return (
    <div>
      <PostForm onPost={handleCreatePost} />
      <PostFeed posts={posts} />
    </div>
  );
}
