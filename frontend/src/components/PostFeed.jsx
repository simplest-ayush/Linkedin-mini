import PostItem from "./PostItem";

export default function PostFeed({ posts }) {
  if (!posts.length)
    return <div className="text-center text-gray-400">No posts yet.</div>;
  return (
    <>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </>
  );
}
