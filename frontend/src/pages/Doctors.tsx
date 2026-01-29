import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Doctors = () => {
  const doctorsData = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Cardiologist",
      experience: "10 years",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Dr. Amit Verma",
      specialty: "Neurologist",
      experience: "8 years",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Dr. Neha Kapoor",
      specialty: "Dermatologist",
      experience: "5 years",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "Dr. Rohit Singh",
      specialty: "Pediatrician",
      experience: "7 years",
      img: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl max-auto px-6 py-10 bg-gray-50">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {" "}
            Find <span className="text-teal-600">Doctors</span>
          </h1>
          <p className="text-gray-500 text-lg font-semibold mt-2">
            Search and book appointments with trusted doctors near you.
          </p>
        </div>

        {/* Search & Filters */}
        <div>
          <input
            type="search"
            name=""
            id=""
            className="border-2 border-gray-200 bg-white rounded-xl mx-36 mb-8 p-4 w-230.5 h-14 shadow-lg font-bold "
            placeholder="Search doctors or specialities..."
          />
        </div>

        <div className="mt-8">Filter</div>

        {/* Doctors Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctorsData.map((doctor) => (
            <div key={doctor.id}>
              <img src={doctor.img} alt="" />
              <h1>{doctor.name}</h1>
              <h2>{doctor.specialty}</h2>
              <p>{doctor.experience}</p>
            </div>
          ))}
         </div>

      </div>
      <Footer />
    </div>
  );
};

export default Doctors;
