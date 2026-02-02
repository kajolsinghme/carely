import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
    }
    navigate("/login");
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="h-16 max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 ml-16">
          <img
            src="../src/assets/Carely Logo.png"
            alt="Carely Logo"
            className="w-10 h-8"
          />
          <span className="text-2xl font-semibold text-gray-900">Carely</span>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-8 text-gray-600 font-medium">
          <li>
            <Link to="/" className="hover:text-teal-700 transition-colors">
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/doctors"
              className="hover:text-teal-700 transition-colors"
            >
              Find Doctors
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-teal-700 transition-colors">
              About
            </Link>
          </li>
        </ul>

        <div className="mr-16">
          <Button
            label={isLoggedIn ? "Log Out" : "Log In"}
            width="w-28"
            variant={isLoggedIn ? "danger" : "primary"}
            onClick={handleAuthClick}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
