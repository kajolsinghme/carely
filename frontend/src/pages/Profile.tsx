import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { User } from "lucide-react";
import { useState } from "react";

const Profile = () => {

  const profilePhoto: string | null = null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [fees, setFees] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSave = () => {
    // const payload = {
    //   name,
    //   email,
    //   age,
    //   gender,
    //   specialization,
    //   experience,
    //   fees,
    //   location,
    //   availability,
    // };

    // console.log("Profile data:", payload);
    // TODO: call update profile API
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#f8f8f8] py-10 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

          {/* Profile Image */}
          <div className="flex justify-center mb-8">
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

          {/* Profile Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="text-md font-medium">Name</label>
              <input
                className="w-full mt-2 border rounded-lg px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-md  font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-2 border rounded-lg px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-md  font-medium">Age</label>
              <input
                type="number"
                className="w-full mt-2 border rounded-lg px-3 py-2"
                min={18}
                max={90}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div>
              <label className="text-md font-medium">Gender</label>
              <input
                className="w-full mt-2 border rounded-lg px-3 py-2"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>

            <div>
              <label className="text-md font-medium">Specialization</label>
              <input
                className="w-full mt-2 border rounded-lg px-3 py-2"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              />
            </div>

            <div>
              <label className="text-md  font-medium">Experience (years)</label>
              <input
                type="number"
                className="w-full mt-2 border rounded-lg px-3 py-2"
                min={0}
                max={80}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>

            <div>
              <label className="text-md font-medium">Consultation Fees</label>
              <input
                type="number"
                className="w-full mt-2 border rounded-lg px-3 py-2"
                min={0}
                max={10000}
                value={fees}
                onChange={(e) => setFees(e.target.value)}
              />
            </div>

            <div>
              <label className="text-md font-medium">Location</label>
              <input
                className="w-full mt-2 border rounded-lg px-3 py-2"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-md font-medium">Availability</label>
              <input
                className="w-full mt-2 border rounded-lg px-3 py-2"
                placeholder="Mon–Fri, 10AM–5PM"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
              />
            </div>

          </div>

          {/* Actions */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleSave}
              className="w-56 bg-teal-600 text-white rounded-full py-2 font-medium hover:opacity-90 transition"
            >
              Save Profile
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
