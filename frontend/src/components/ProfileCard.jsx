import image from "../assets/img.jpg";
export default function ProfileCard({ user }) {
  return (
    <div className="bg-white shadow rounded p-4 text-center mb-4">
      <img src={image} className="w-36 h-36 mx-auto rounded-full" />
      <h2 className="font-bold text-lg mt-2 uppercase">{user.name}</h2>
      <p className="text-gray-500">{user.bio}</p>
      <p className="text-xs text-gray-400">{user.email}</p>
    </div>
  );
}
