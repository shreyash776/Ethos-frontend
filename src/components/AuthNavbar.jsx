import { CubeIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../redux/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <nav className="bg-gray-100 shadow-lg">
      < div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="flex justify-between h-16">
          <a href="/" className="flex-shrink-0 flex items-center">
            <CubeIcon className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">PixelFace</span>
          </a>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">{user.name}</span>
                <img
                  src={user.avatar || 'https://via.placeholder.com/40'}
                  alt='User Avatar'
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/signin"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div >
    </nav >
  );
};

export default Navbar;

