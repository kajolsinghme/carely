import { Link } from "react-router-dom";
import ReusableButton from "./Button";

const Navbar = () => {
  const handleLogin = () => {
    alert("Logged in !");
  };
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="h-16 max-w-7xl  mx-auto  px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 ml-16">
          <img
            src="../src/assets/Carely Logo.png"
            alt="Logo"
            className="w-10 h-8"
          />
          <span className="text-2xl font-semibold text-gray-900">Carely</span>
        </div>

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
          <ReusableButton label="Log In" onClick={handleLogin} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
