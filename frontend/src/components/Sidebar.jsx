// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import image from "../assets/img.jpg";
// export default function Sidebar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();
//     navigate("/login");
//   };

//   if (!user) return null;
//   return (
//     <aside className="hidden md:flex flex-col w-60 bg-gray-50 border-r min-h-screen pt-20 px-4 gap-4">
//       <img
//         src={image}
//         className="w-16 h-16 rounded-full mx-auto mt-2"
//         alt="profile"
//       />
//       <h2 className="text-center font-semibold">{user.name}</h2>
//       <p className="text-xs text-center text-gray-400">{user.bio}</p>
//       <nav className="flex flex-col gap-2 mt-4">
//         <Link to="/" className="hover:bg-blue-100 rounded px-2 py-1">
//           Home
//         </Link>
//         <Link
//           to={`/profile/${user._id}`}
//           className="hover:bg-blue-100 rounded px-2 py-1"
//         >
//           My Profile
//         </Link>
//       </nav>
//       <button
//         onClick={handleLogout}
//         className="mt-8 bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1"
//       >
//         Logout
//       </button>
//     </aside>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import image from "../assets/img.jpg";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r min-h-screen pt-20 px-6 gap-4 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          className="w-16 h-16 rounded-full border border-gray-300"
          alt="profile"
        />
        <h2 className="mt-2 font-medium text-gray-800 text-lg">{user.name}</h2>
        <p className="text-xs text-gray-500">{user.bio}</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 mt-6 text-sm font-medium text-gray-700">
        <Link to="/" className="hover:bg-gray-100 px-3 py-2 rounded transition">
          Home
        </Link>
        <Link
          to={`/profile/${user._id}`}
          className="hover:bg-gray-100 px-3 py-2 rounded transition"
        >
          My Profile
        </Link>
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-auto mb-4 w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded px-4 py-2 text-sm transition duration-150 font-medium cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v1"
          />
        </svg>
        Logout
      </button>
    </aside>
  );
}
