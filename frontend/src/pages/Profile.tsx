import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { User } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchDoctorProfileApi, updateDoctorProfileApi } from "../api/doctor.api";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [fees, setFees] = useState("");
  const [location, setLocation] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const [availability, setAvailability] = useState({
    Monday: { enabled: false, start: "", end: "" },
    Tuesday: { enabled: false, start: "", end: "" },
    Wednesday: { enabled: false, start: "", end: "" },
    Thursday: { enabled: false, start: "", end: "" },
    Friday: { enabled: false, start: "", end: "" },
    Saturday: { enabled: false, start: "", end: "" },
    Sunday: { enabled: false, start: "", end: "" },
  });

  const [slotDuration, setSlotDuration] = useState("");

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        const res = await fetchDoctorProfileApi();
        const doctor = res.data;

        console.log("data", doctor);

        setName(doctor.user.name || "");
        setEmail(doctor.user.email || "");
        setAge(doctor.user.age?.toString() || "");
        setGender(doctor.user.gender || "");
        setSpecialization(doctor.doctorProfile.specialization || "");
        setExperience(doctor.doctorProfile.yearsOfExperience?.toString() || "");
        setFees(doctor.doctorProfile.consultationFee?.toString() || "");
        setLocation(doctor.doctorProfile.location || "");
        setProfilePicture(doctor.doctorProfile.profilePicture || null);

      } catch (error) {
        console.error("Failed to fetch doctor profile", error);
      }
    };
    fetchDoctorProfile();
  }, []);

  const handleSave = async() => {

     const formattedAvailability = Object.entries(availability).filter(([,v]) => v.enabled).map(([day,v]) => ({
        day,
        startTime: v.start,
        endTime: v.end
     }))
    const payload = {
      name,
      age,
      gender,
      specialization,
      yearsOfExperience: Number(experience),
      consultationFee: Number(fees),
      location,
    availability: formattedAvailability,
    slotDuration: Number(slotDuration),
    };

    await updateDoctorProfileApi(payload);
    console.log("Profile payload:", payload);
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#f6f7fb] py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">
          {/* ===== Profile Header ===== */}
          <div className="flex items-center gap-6 mb-12">
            <div className="w-32 h-32 rounded-full bg-linear-to-br from-teal-500 to-emerald-400 flex items-center justify-center shadow-md">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-16 h-16 text-white" />
              )}
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {name || "Doctor Profile"}
              </h2>
              <p className="text-gray-500 mt-1">
                Manage your professional information & availability
              </p>
            </div>
          </div>

          {/* ===== Personal Info ===== */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  className="w-full mt-2 border rounded-xl px-4 py-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-2 border rounded-xl px-4 py-2"
                  value={email}
                   onChange={(e) =>setEmail(e.target.value )}

                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Age</label>
                <input
                  type="number"
                  className="w-full mt-2 border rounded-xl px-4 py-2"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Gender
                </label>
                <input
                  className="w-full mt-2 border rounded-xl px-4 py-2"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* ===== Professional Info ===== */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Professional Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Specialization
                </label>
                <input
                  className="w-full mt-2 border rounded-xl px-4 py-2"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Experience (years)
                </label>
                <input
                  type="number"
                  className="w-full mt-2 border rounded-xl px-4 py-2"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Consultation Fees
                </label>
                <input
                  type="number"
                  className="w-full mt-2 border rounded-xl px-4 py-2"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Location
                </label>
                <input
                  className="w-full mt-2 border rounded-xl px-4 py-2"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* ===== Availability ===== */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Weekly Availability
            </h3>

            <div className="space-y-4">
              {Object.entries(availability).map(([day, value]) => (
                <div
                  key={day}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${
                    value.enabled
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={value.enabled}
                    onChange={(e) =>
                      setAvailability({
                        ...availability,
                        [day]: { ...value, enabled: e.target.checked },
                      })
                    }
                  />

                  <span className="w-24 font-medium text-gray-700">{day}</span>

                  <input
                    type="time"
                    disabled={!value.enabled}
                    value={value.start}
                    onChange={(e) =>
                      setAvailability({
                        ...availability,
                        [day]: { ...value, start: e.target.value },
                      })
                    }
                    className="border rounded-lg px-3 py-1 disabled:bg-gray-100"
                  />

                  <span className="text-gray-500">to</span>

                  <input
                    type="time"
                    disabled={!value.enabled}
                    value={value.end}
                    onChange={(e) =>
                      setAvailability({
                        ...availability,
                        [day]: { ...value, end: e.target.value },
                      })
                    }
                    className="border rounded-lg px-3 py-1 disabled:bg-gray-100"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* ===== Slot Duration ===== */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Appointment Slot Duration
            </h3>

            <select
              value={slotDuration}
              onChange={(e) => setSlotDuration(e.target.value)}
              className="border rounded-xl px-4 py-2 w-64"
            >
              <option value="">Select duration</option>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
            </select>
          </section>

          {/* ===== Save Button ===== */}
          <div className="flex justify-center">
            <button
              onClick={handleSave}
              className="w-64 bg-teal-600 text-white rounded-full py-3 font-semibold hover:opacity-90 transition"
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
