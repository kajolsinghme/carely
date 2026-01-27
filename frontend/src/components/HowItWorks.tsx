import { Search, CalendarCheck, Video } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            How <span className="text-teal-600">Carely</span> Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Book and consult with doctors in just three simple steps.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
              <Search className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Find a Doctor
            </h3>
            <p className="mt-2 text-gray-600">
              Search doctors by specialty, location, or availability.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
              <CalendarCheck className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Book Appointment
            </h3>
            <p className="mt-2 text-gray-600">
              Choose a convenient time slot and book instantly.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
              <Video className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Consult Online
            </h3>
            <p className="mt-2 text-gray-600">
              Consult securely with your doctor from home.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
