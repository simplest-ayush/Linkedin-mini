// import { Fragment } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Menu, Transition } from "@headlessui/react";
// import {
//   ChevronDownIcon,
//   ArrowLeftOnRectangleIcon,
// } from "@heroicons/react/24/solid";
// import { useAuth } from "../contexts/AuthContext";
// import toast from "react-hot-toast";
// import image from "../assets/img.jpg";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();
//     toast.success("Logout Successful", { duration: 1300 });
//     navigate("/login");
//   };

//   return (
//     <nav className="fixed top-0 w-full z-20 bg-white shadow px-4 py-2 flex items-center">
//       <Link to="/" className="font-bold text-blue-600 text-lg mr-8">
//         MiniLinkedIn
//       </Link>
//       <div className="ml-auto flex items-center gap-4">
//         {user ? (
//           <Menu as="div" className="relative inline-block text-left">
//             <Menu.Button className="flex items-center space-x-2 focus:outline-none">
//               <img
//                 src={image}
//                 className="w-9 h-9 rounded-full border"
//                 alt="avatar"
//               />
//               <span className="hidden md:inline font-medium">{user.name}</span>
//               <ChevronDownIcon className="w-5 h-5 ml-1 text-gray-500" />
//             </Menu.Button>
//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-100"
//               enterFrom="transform opacity-0 scale-95"
//               enterTo="transform opacity-100 scale-100"
//               leave="transition ease-in duration-75"
//               leaveFrom="transform opacity-100 scale-100"
//               leaveTo="transform opacity-0 scale-95"
//             >
//               <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-50">
//                 <div className="p-2">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <Link
//                         to={`/profile/${user._id}`}
//                         className={`${
//                           active ? "bg-gray-100" : ""
//                         } flex items-center px-3 py-2 text-sm rounded`}
//                       >
//                         My Profile
//                       </Link>
//                     )}
//                   </Menu.Item>
//                   {/* More dropdown items can be added here */}
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={handleLogout}
//                         className={`${
//                           active ? "bg-red-50 text-red-700" : "text-red-600"
//                         } flex items-center px-3 py-2 text-sm w-full rounded`}
//                       >
//                         <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-2" />
//                         Logout
//                       </button>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Transition>
//           </Menu>
//         ) : (
//           <>
//             <Link to="/login" className="text-blue-600 px-3 py-1">
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-blue-600 text-white rounded px-3 py-1"
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import image from "../assets/img.jpg";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success("Logout Successful", { duration: 1300 });
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 w-full z-20 bg-white border-b border-gray-200 px-6 py-3 flex items-center shadow-sm">
      <Link to="/" className="text-blue-700 text-2xl font-semibold mr-8">
        MiniLinkedIn
      </Link>

      <div className="ml-auto flex items-center gap-4">
        {user ? (
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center space-x-2 focus:outline-none">
              <img
                src={image}
                alt="avatar"
                className="w-9 h-9 rounded-full border border-gray-300"
              />
              <span className="hidden md:inline text-sm font-medium text-gray-700">
                {user.name}
              </span>
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={`/profile/${user._id}`}
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                      >
                        My Profile
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`${
                          active ? "bg-gray-100" : ""
                        } flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50`}
                      >
                        <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-2" />
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          <>
            <Link
              to="/login"
              className="text-sm text-gray-700 font-medium hover:text-blue-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded transition duration-150"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
