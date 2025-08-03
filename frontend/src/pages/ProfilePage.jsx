// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ProfileCard from "../components/ProfileCard";
// import PostFeed from "../components/PostFeed";
// import axios from "axios";

// export default function ProfilePage() {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`/api/v1/users/current-user`, { withCredentials: true })
//       .then((res) => setUser(res.data.data));
//     axios
//       .get(`/api/v1/posts/get-post/${id}`, { withCredentials: true })
//       .then((res) => setPosts(res.data.data));
//   }, [id]);

//   if (!user) return null;
//   return (
//     <div>
//       <ProfileCard user={user} />
//       <h3 className="font-semibold my-4">{user.name}'s Posts:</h3>
//       <PostFeed posts={posts} />
//     </div>
//   );
// }

// import { useParams } from "react-router-dom";
// import EditProfile from "../components/EditProfile";
// import { useAuth } from "../contexts/AuthContext";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import ProfileCard from "../components/ProfileCard";
// import PostFeed from "../components/PostFeed";
// import Loader from "../components/Loader";

// export default function ProfilePage() {
//   const { id } = useParams();
//   const { user: currentUser } = useAuth();
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/v1/users/current-user", { withCredentials: true })
//       .then((res) => setUser(res.data.data))
//       .catch(() => setUser(null));

//     axios
//       .get(`/api/v1/posts/get-post/${id}`, { withCredentials: true })
//       .then((res) => setPosts(res.data.data))
//       .catch(() => setPosts([]));
//   }, [id]);

//   // if (!user) return <p>Loading profile...</p>;
//   if (!user) return <Loader />;

//   const isOwnProfile = currentUser?._id === user._id;

//   return (
//     <>
//       <ProfileCard user={user} />

//       {isOwnProfile && <EditProfile user={user} onUpdate={setUser} />}

//       <h3 className="font-semibold my-4">{user.name}'s Posts:</h3>
//       <PostFeed posts={posts} />
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import PostFeed from "../components/PostFeed";
import EditProfile from "../components/EditProfile";
import axios from "axios";
import instance from "../api/axios";
import { useAuth } from "../contexts/AuthContext";

export default function ProfilePage() {
  const { id } = useParams();
  const { user: currentUser } = useAuth();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // add state for showing/hiding edit form
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch the profile user data by ID
    instance
      .get("/users/current-user", { withCredentials: true })
      .then((res) => setUser(res.data.data))
      .catch(() => setUser(null));

    // Fetch posts by that user
    instance
      .get(`/posts/get-post/:${id}`, { withCredentials: true })
      .then((res) => setPosts(res.data.data))
      .catch(() => setPosts([]));
  }, [id]);

  if (!user) return null;

  const isOwnProfile = currentUser?._id === user._id;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <>
      <ProfileCard user={user} />

      {isOwnProfile && !isEditing && (
        <button
          onClick={handleEditClick}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          Update Profile
        </button>
      )}

      {isOwnProfile && isEditing && (
        <EditProfile user={user} onUpdate={handleUpdate} />
      )}

      <h3 className="font-semibold my-4">{user.name}'s Posts:</h3>
      <PostFeed posts={posts} />
    </>
  );
}
