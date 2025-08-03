import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="font-bold text-2xl mb-4">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-600 underline">
        Go Home
      </Link>
    </div>
  );
}
