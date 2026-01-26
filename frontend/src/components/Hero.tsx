import ReusableButton from "./ReusableButton";

const Hero = () => {
  const handleFindDoctor = () => {
    alert("mock");
  };
  return (
    <section className="max-w-7xl px-3">
      <div className="flex items-center  h-125 justify-between gap-6">
        <div className="w-1/2 px-16">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Book Doctor{" "}
            <span className="text-teal-600 ">Appointments Online</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Find trusted doctors, book appointments instantly, and consult
            online from the comfort of your home.
          </p>
          <div className="mt-2 flex gap-4">
            <ReusableButton label="Book Now" onClick={handleFindDoctor} />
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="../src/assets/Hero-image.jpg"
            alt=""
            className="w-full h-125 overflow-hidden object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
