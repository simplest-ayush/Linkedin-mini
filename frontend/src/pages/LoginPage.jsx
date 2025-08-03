// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import axios from "axios";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { setUser } = useAuth();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios
//       .post(
//         "/api/v1/users/login",
//         { email, password },
//         { withCredentials: true }
//       )
//       .then((res) => {
//         setUser(res.data.data.user);
//         navigate("/");
//       })
//       .catch((err) => setError(err.response?.data?.message || "Login failed"));
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-[80vh]">
//       <form
//         className="w-96 bg-white shadow rounded px-8 py-6"
//         onSubmit={handleLogin}
//       >
//         <h2 className="font-bold text-xl mb-4 text-center">Sign In</h2>
//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//         <input
//           type="email"
//           className="w-full border px-3 py-2 rounded mb-2"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           className="w-full border px-3 py-2 rounded mb-4"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button className="w-full bg-blue-600 text-white rounded py-2 cursor-pointer hover:bg-blue-700">
//           Login
//         </button>
//         <p className="mt-2 text-sm">
//           No account?{" "}
//           <Link to="/register" className="text-blue-600">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import instance from "../api/axios.js";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    instance
      .post("/users/login", { email, password }, { withCredentials: true })
      .then((res) => {
        setUser(res.data.data.user);
        navigate("/");
      })
      .catch((err) => setError(err.response?.data?.message || "Login failed"));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-lg">
        <div className="text-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="mx-auto w-16 h-16"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">Sign in</h2>
          <p className="text-sm text-gray-500">
            Stay updated on your professional world
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          New to our platform?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Join now
          </Link>
        </div>
      </div>
    </div>
  );
}
