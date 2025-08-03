import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import PostFeed from "../components/PostFeed";
import axios from "axios";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get("/api/v1/posts/get-all-posts", { withCredentials: true })
      .then((res) => setPosts(res.data.data));
  }, [refresh]);

  const handleCreatePost = (content, reset) => {
    axios
      .post("/api/v1/posts/create-post", { content }, { withCredentials: true })
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
