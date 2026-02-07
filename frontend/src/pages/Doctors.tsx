import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { fetchDoctorsApi } from "../api/doctor.api";
import { User } from "lucide-react";

interface Doctor {
_id: string;
userId: {
name: string;
};
specialization: string;
yearsOfExperience: number;
consultationFee: number;
location: string;
profilePicture?: string;
}

const Doctors = () => {
  const navigate = useNavigate();

const [doctors, setDoctors] = useState<Doctor[]>([]);
  // const [search, setSearch] = useState("")

  const handleBook = (id: string) => {
    navigate(`/book/${id}`);
  };

  useEffect(() => {
    const fetchDoctors = async() => {
      try{
        const res = await fetchDoctorsApi()
        setDoctors(res.doctors)
        console.log("data", res.doctors)
      }
      catch (error) {
        console.error("Failed to fetch doctors", error);
      }
    }

    fetchDoctors()
  },[])


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto w-full px-6 py-10">
        {/* ===== Header ===== */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Find <span className="text-teal-600">Doctors</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium mt-2">
            Search and book appointments with trusted doctors near you.
          </p>
        </div>

        {/* ===== Search Bar ===== */}
        <div className="flex justify-center mb-8">
          <input
            type="search"
            className="border border-gray-300 bg-white rounded-2xl px-5 w-full max-w-3xl h-14 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Search doctors or specialities..."
          />
        </div>

        {/* ===== Filters Card ===== */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-md p-6 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Illness */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Illness
              </label>
              <select className="h-11 px-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>All Types</option>
                <option>Heart</option>
                <option>Skin</option>
                <option>Brain</option>
              </select>
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Experience
              </label>
              <select className="h-11 px-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Any Experience</option>
                <option>5+ years</option>
                <option>10+ years</option>
              </select>
            </div>

            {/* Fees */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Fees
              </label>
              <select className="h-11 px-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Any Range</option>
                <option>₹200 - ₹500</option>
                <option>₹500 - ₹1000</option>
              </select>
            </div>

            {/* Availability */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Availability
              </label>
              <select className="h-11 px-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Any</option>
                <option>Available Today</option>
              </select>
            </div>
          </div>
        </div>

        {/* ===== Doctors Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor: Doctor) => (
            <div
              key={doctor._id}
              className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition"
            >
              <img
  src={doctor.profilePicture ?? undefined}
  alt={doctor.userId.name}
  className={`w-28 h-28 rounded-full object-cover mb-4 ${
    !doctor.profilePicture ? "hidden" : ""
  }`}
/>
{!doctor.profilePicture && (
  <div className="w-28 h-28 flex items-center justify-center bg-gray-200 rounded-full mb-4">
    <User className="w-16 h-16 text-gray-500" />
  </div>
)}


              <h3 className="text-xl font-semibold text-gray-900">
                Dr. {doctor.userId?.name}
              </h3>

              <p className="text-teal-600 font-semibold mt-1">
                {doctor.specialization}
              </p>

              <p className="text-gray-500 mt-1">
                {doctor.yearsOfExperience} years experience
              </p>

              <p className="text-gray-700 font-semibold mt-1">
                Consultation Fees: ${doctor.consultationFee}
    </p>

              <div className="mt-4">
                <Button
                  label="Book Appointment"
                  onClick={() => handleBook(doctor._id)}
                  width="w-52"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Doctors;