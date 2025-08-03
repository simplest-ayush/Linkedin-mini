import image from "../assets/img.jpg";

export default function PostItem({ post }) {
  // console.log(post);

  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <div className="flex items-center gap-2">
        <img src={image} className="w-10 h-10 rounded-full" alt="avatar" />
        <div className="font-bold">
          {post.author.name}
          <div className="text-xs text-gray-400">
            {new Date(post.createdAt).toLocaleString()}
          </div>
        </div>
      </div>
      <p className="mt-2">{post.content}</p>
    </div>
  );
}
