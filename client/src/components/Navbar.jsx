import { NavLink } from "react-router-dom";
import { FaHome, FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            PostLy
          </span>
        </div>

        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-all duration-200 flex items-center gap-2 ${isActive
                ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                : "text-gray-600 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-500 pb-1"
              }`
            }
          >
            <FaHome className="w-4 h-4" />
            Home
          </NavLink>

          <NavLink
            to="/create-post"
            className={({ isActive }) =>
              `text-sm font-medium transition-all duration-200 flex items-center gap-2 ${isActive
                ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                : "text-gray-600 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-500 pb-1"
              }`
            }
          >
            <FaPlus className="w-4 h-4" />
            Create
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;