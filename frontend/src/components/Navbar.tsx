import ReusableButton from "./ReusableButton";

const Navbar = () => {
  const handleLogin = () => {
    alert("Logged in !");
  };
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="h-16 max-w-7xl  mx-auto  px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="../src/assets/Carely Logo.png"
            alt="Logo"
            className="w-10 h-8"
          />
          <span className="text-2xl font-semibold text-gray-900">Carely</span>
        </div>

        <ul className="flex items-center gap-8 text-gray-600 font-medium list-none">
          <li>
            <a href="/" className="hover:text-teal-700 transition-colors">
              Find Doctors
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-teal-700 transition-colors">
              Consult Online
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-teal-700 transition-colors">
              For Doctors
            </a>
          </li>
        </ul>

        <ReusableButton label="Log In" onClick={handleLogin} />
        
      </nav>
    </header>
  );
};

export default Navbar;
