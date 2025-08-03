// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import axios from "axios";

// export default function RegisterPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [bio, setBio] = useState("");
//   const [password, setPassword] = useState("");
//   const { setUser } = useAuth();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await axios.post(
//         "/api/v1/users/register",
//         { name, email, bio, password },
//         { withCredentials: true }
//       );

//       // Optionally fetch user again if backend doesn't return it
//       const userRes = await axios.get("/api/v1/users/current-user", {
//         withCredentials: true,
//       });

//       setUser(userRes.data.data); // or userRes.data.data if you fetched again
//       navigate("/");
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-[80vh]">
//       <form
//         className="w-96 bg-white shadow rounded px-8 py-6"
//         onSubmit={handleRegister}
//       >
//         <h2 className="font-bold text-xl mb-4 text-center">Sign Up</h2>
//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//         <input
//           type="text"
//           className="w-full border px-3 py-2 rounded mb-2"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           className="w-full border px-3 py-2 rounded mb-2"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           className="w-full border px-3 py-2 rounded mb-2"
//           placeholder="Bio"
//           value={bio}
//           onChange={(e) => setBio(e.target.value)}
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
//         <button className="w-full bg-blue-600 text-white rounded py-2">
//           Register
//         </button>
//         <p className="mt-2 text-sm">
//           Already a member?{" "}
//           <Link to="/login" className="text-blue-600">
//             Login
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

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(
        "/users/register",
        { name, email, bio, password },
        { withCredentials: true }
      );

      const userRes = await axios.get("/users/current-user", {
        withCredentials: true,
      });

      setUser(userRes.data.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
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
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">
            Join now
          </h2>
          <p className="text-sm text-gray-500">
            Make the most of your professional life
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Bio"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
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
            Agree & Join
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already a member?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
