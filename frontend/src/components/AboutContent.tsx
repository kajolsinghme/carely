import { HeartPulse, Users, ShieldCheck } from "lucide-react";

const AboutContent = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">
          About <span className="text-teal-600">Carely</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Carely is a digital healthcare platform that makes it easy to
          find trusted doctors, book appointments, and consult online —
          all in one place.
        </p>
      </div>

      {/* Mission + Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to simplify healthcare access by connecting
            patients with verified medical professionals through a fast,
            secure, and user-friendly platform.
          </p>

          <h2 className="text-2xl font-semibold text-teal-600 mt-8">
            Our Vision
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We envision a world where quality healthcare is accessible to
            everyone, regardless of location, through the power of
            technology.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <HeartPulse className="text-teal-600 mb-4" size={32} />
            <h3 className="text-lg font-semibold text-gray-900">
              Patient First
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Designed with a patient-centric approach to ensure comfort,
              trust, and ease of use.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <Users className="text-teal-600 mb-4" size={32} />
            <h3 className="text-lg font-semibold text-gray-900">
              Trusted Doctors
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Work with verified and experienced healthcare professionals
              across specialties.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white sm:col-span-2">
            <ShieldCheck className="text-teal-600 mb-4" size={32} />
            <h3 className="text-lg font-semibold text-gray-900">
              Secure & Reliable
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
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
