import { Clock, Stethoscope, Video } from "lucide-react";

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">
          Why choose <span className="text-teal-600">Carely</span>?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Everything you need to manage your health, all in one place.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-10">
        <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
          <Stethoscope className="w-10 h-10 text-teal-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">
            Verified Doctors
          </h3>
          <p className="mt-2 text-gray-600">
            Consult experienced and verified doctors across all specialties.
          </p>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
          <Clock className="w-8 h-8 text-teal-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">
            Instant Appointments
          </h3>
          <p className="mt-2 text-gray-600">
            Book appointments instantly with real-time availability.
          </p>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
          <Video className="w-10 h-10 text-teal-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">
            Online Consultation
          </h3>
          <p className="mt-2 text-gray-600">
            Get medical advice from home through secure online consultations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
