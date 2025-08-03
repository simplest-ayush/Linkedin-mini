// import { useState } from "react";

// export default function PostForm({ onPost }) {
//   const [content, setContent] = useState("");

//   return (
//     <form
//       className="bg-white rounded shadow p-4 mb-4"
//       onSubmit={(e) => {
//         e.preventDefault();
//         onPost(content, setContent);
//       }}
//     >
//       <textarea
//         className="w-full border p-2 rounded mb-2 resize-none"
//         placeholder="What's on your mind?"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         rows={3}
//         required
//       />
//       <div className="flex justify-end">
//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//           type="submit"
//         >
//           Post
//         </button>
//       </div>
//     </form>
//   );
// }

import { useState } from "react";
import image from "../assets/img.jpg"; // Replace with user's image if available

export default function PostForm({ onPost }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onPost(content, setContent);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg shadow-sm p-4 md:p-6 mb-4 w-full max-w-2xl mx-auto"
    >
      <div className="flex items-start gap-3 mb-3">
        <img
          src={image}
          alt="User avatar"
          className="w-11 h-11 rounded-full object-cover border"
        />
        <textarea
          className="flex-1 resize-none border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          placeholder="Start a post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={3}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!content.trim()}
          className={`px-5 py-2 rounded-full text-white text-sm font-medium transition ${
            content.trim()
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-300 cursor-not-allowed"
          }`}
        >
          Post
        </button>
      </div>
    </form>
  );
}
