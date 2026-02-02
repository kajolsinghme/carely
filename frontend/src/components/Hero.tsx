import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-7xl px-3">
      <div className="flex items-center  h-125 justify-between gap-6">
        <div className="w-1/2 px-16">
          <h1 className="text-[49px] font-bold text-gray-900 leading-tight">
            Book Doctor{" "}
            <span className="text-teal-600 ">Appointments Online</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Find trusted doctors, book appointments instantly, and consult
            online from the comfort of your home.
          </p>
          <div className="mt-2 flex gap-4">
            <Button
              label="Book Now"
              width="w-40"
              onClick={() => navigate("/doctors")}
            />
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
