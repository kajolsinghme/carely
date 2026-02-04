// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { User } from "lucide-react";
// import { User } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const profilePhoto = false;

  return (
    <>
      <Navbar />

      <div className=" bg-[#f8f8f8] py-10">
        <div className="max-w-3xl mx-auto border-2  border-teal-600 bg-white rounded-2xl shadow-lg p-8">

          {/* Profile Image */}
          <div className="flex items-center justify-center">
            <div className="w-28 h-28 border rounded-full overflow-hidden flex items-center justify-center">
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-14 h-14 text-gray-500" />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-2 mt-6">
            {/* Info */}
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold text-gray-900"></h2>

              <p className="text-sm text-gray-600"></p>

              <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-700">
                Doctor
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex justify-center ">
            <button
              onClick={() => navigate("/profile/edit")}
              className="w-56 bg-teal-600 text-white rounded-full py-2 font-medium hover:opacity-90 transition"
            >
              Manage Profile
            </button>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
