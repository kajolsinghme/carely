import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Doctors = () => {
  const navigate = useNavigate();

  const handleBook = (id: number) => {
    navigate(`/book/${id}`);
  };

  const doctorsData = [
    {
      id: 1,
      name: "Sophia Wilson",
      specialty: "Cardiologist",
      experience: "10 years",
      fees: "₹1000",
      availableToday: true,
      img: "https://randomuser.me/api/portraits/women/64.jpg",
    },
    {
      id: 2,
      name: "Robert Williams",
      specialty: "Neurologist",
      experience: "8 years",
      fees: "₹500",
      availableToday: true,
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Amelia Jones",
      specialty: "Dermatologist",
      experience: "5 years",
      fees: "₹800",
      availableToday: false,
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "David Smith",
      specialty: "Pediatrician",
      experience: "7 years",
      availableToday: true,
      img: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    {
      id: 5,
      name: "Avid Roger",
      specialty: "Orthopedist",
      experience: "16 years",
      fees: "₹1500",
      availableToday: true,
      img: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      id: 6,
      name: "Richie Gold",
      specialty: "Orthodontist",
      experience: "4 years",
      fees: "₹500",
      availableToday: true,
      img: "https://randomuser.me/api/portraits/women/24.jpg",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-50">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Find <span className="text-teal-600">Doctors</span>
          </h1>
          <p className="text-gray-500 text-lg font-semibold mt-2">
            Search and book appointments with trusted doctors near you.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-3">
          <input
            type="search"
            name=""
            id=""
            className="border border-gray-300 bg-white rounded-xl px-5 w-full max-w-3xl h-14 shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Search doctors or specialities..."
          />
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 mb-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>
              <select className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>All Locations</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </div>

            {/* Illness */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Illness
              </label>
              <select className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>All Types</option>
                <option>Heart</option>
                <option>Skin</option>
                <option>Brain</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Experience
              </label>
              <select className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Any Experience</option>
                <option>5+ years</option>
                <option>10+ years</option>
              </select>
            </div>

            {/* Fees */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Fees
              </label>
              <select className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Any Range</option>
                <option>₹200 - ₹500</option>
                <option>₹500 - ₹1000</option>
              </select>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Availability
              </label>
              <select className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Any</option>
                <option>Available Today</option>
              </select>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
          {doctorsData.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white border border-gray-200 rounded-2xl p-3 flex flex-col items-center text-center hover:shadow-xl"
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="w-28 h-28 rounded-full object-cover mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-900">
                Dr. {doctor.name}
              </h3>

              <p className="text-md text-teal-600 font-bold mt-1">
                {doctor.specialty}
              </p>

              <p className="text-md text-gray-500 mt-1">
                {doctor.experience} experience
              </p>

              <p className="text-md text-gray-700 font-semibold mt-1">
                Consultation Fees:{" "}
                <span className="text-gray-800">{doctor.fees}</span>
              </p>

              <div className="mt-2 w-full flex justify-center">
                <Button
                  label="Book Appointment"
                  onClick={() => handleBook(doctor.id)}
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
