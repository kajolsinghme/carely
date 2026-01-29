import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReusableButton from "../components/ReusableButton";

const Doctors = () => {
  const handleBook = () => {
    // Handle booking logic here
    console.log("Book appointment");
  };

  const doctorsData = [
    {
      id: 1,
      name: "Sophia Wilson",
      specialty: "Cardiologist",
      experience: "10 years",
      img: "https://randomuser.me/api/portraits/women/64.jpg",
    },
    {
      id: 2,
      name: "Robert Williams",
      specialty: "Neurologist",
      experience: "8 years",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Amelia Jones",
      specialty: "Dermatologist",
      experience: "5 years",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "David Smith",
      specialty: "Pediatrician",
      experience: "7 years",
      img: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    {
      id: 4,
      name: "David Smith",
      specialty: "Pediatrician",
      experience: "7 years",
      img: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      id: 4,
      name: "David Smith",
      specialty: "Pediatrician",
      experience: "7 years",
      img: "https://randomuser.me/api/portraits/men/24.jpg",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-50">
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
        <div className="flex justify-center mb-10">
          <input
            type="search"
            name=""
            id=""
            className="border border-gray-300 bg-white rounded-xl px-5 w-full max-w-3xl h-14 shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Search doctors or specialities..."
          />
        </div>

        <div className="mt-8">Filter</div>

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

              <p className="text-lg text-teal-600 font-medium mt-1">
                {doctor.specialty}
              </p>

              <p className="text-md text-gray-500 mt-1">
                {doctor.experience} experience
              </p>

              <div className="mt-3 w-full flex justify-center">
                <ReusableButton
                  label="Book"
                  onClick={handleBook}
                  bgColor="bg-teal-600"
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
