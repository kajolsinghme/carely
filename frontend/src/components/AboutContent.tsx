import { HeartPulse, Users, ShieldCheck } from "lucide-react";

const AboutContent = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-gray-50">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          About <span className="text-teal-600">Carely</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          Carely is a digital healthcare platform that makes it simple to
          find trusted doctors, book appointments, and consult online —
          all in one place.
        </p>
      </div>

      {/* Mission + Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 items-center">
        <div>
          <h2 className="text-3xl font-bold text-teal-600">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            To simplify healthcare access by connecting patients with verified
            medical professionals through a fast, secure, and intuitive platform.
          </p>

          <h2 className="text-3xl font-bold text-teal-600 mt-12">
            Our Vision
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            We envision a world where quality healthcare is accessible to everyone,
            regardless of location, powered by technology.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            <HeartPulse className="text-teal-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold text-gray-900">
              Patient First
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Designed with a patient-centric approach to ensure comfort,
              trust, and ease of use.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            <Users className="text-teal-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold text-gray-900">
              Trusted Doctors
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Collaborate with verified and experienced healthcare professionals
              across various specialties.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 relative overflow-hidden">
            <ShieldCheck className="text-teal-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold text-gray-900">
              Secure & Reliable
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Your data and consultations are protected with secure
              authentication and privacy-first design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
