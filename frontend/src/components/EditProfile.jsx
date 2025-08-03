import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import instance from '../api/axios.js'

export default function EditProfile({ user, onUpdate }) {
  const [bio, setBio] = useState(user.bio || "");
  const [email, setEmail] = useState(user.email || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await instance.patch(
        "/users/update-account",
        { bio, email },
        { withCredentials: true }
      );
      setUser(res.data.data); // update AuthContext
      if (onUpdate) onUpdate(res.data.data); // update parent ProfilePage state
      toast.success("Profile updated successfully", { duration: 1500 });
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-4 max-w-md mx-auto border border-b-black"
    >
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <label className="block mb-2 font-medium">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
        required
      />
      <label className="block mb-2 font-medium">Bio</label>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="border p-2 w-full mb-4 rounded resize-none"
        rows={3}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
      >
        {loading ? "Updating..." : "Update Profile"}
      </button>
    </form>
  );
}
