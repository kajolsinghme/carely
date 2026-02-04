import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, Settings } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const profilePhoto = localStorage.getItem("profilePhoto");

  const isLoggedIn = Boolean(token);
  const isDoctor = role === "Doctor";

  const handleLogout = () => {
    localStorage.clear();
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
          <span className="text-2xl font-semibold text-gray-900">
            Carely
          </span>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-8 text-gray-600 font-medium">
          <li>
            <Link to="/" className="hover:text-teal-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/doctors" className="hover:text-teal-700">
              Find Doctors
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-teal-700">
              About
            </Link>
          </li>
        </ul>

        {/* Right side */}
        <div className="mr-16 relative flex items-center gap-4">
          {/* NOT LOGGED IN */}
          {!isLoggedIn && (
            <Button
              label="Log In"
              width="w-28"
              onClick={() => navigate("/login")}
            />
          )}

          {/* LOGGED IN + PATIENT */}
          {isLoggedIn && role === "Patient" && (
            <Button
              label="Log Out"
              width="w-28"
              variant="danger"
              onClick={handleLogout}
            />
          )}

          {/* LOGGED IN + DOCTOR */}
          {isLoggedIn && isDoctor && (
            <>
              {/* Profile Photo / Icon */}
              <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full overflow-hidden border flex items-center justify-center hover:ring-2 hover:ring-teal-600"
              >
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-6 h-6 text-teal-600" />
                )}
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute top-14 right-0 w-48 bg-white border rounded-xl shadow-lg py-2 z-50">
                  <button
                    onClick={() => {
                      setOpen(false);
                      navigate("/profile");
                    }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <Settings className="w-4 h-4" />
                    Manage Profile
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4" />
                    Log Out
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
