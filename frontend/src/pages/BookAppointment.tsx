import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import {  useParams } from "react-router-dom";
import { checkoutAppointment } from "../api/appointment.api";

const BookAppointment = () => {
  const {id} = useParams()

  const handleCheckout = async() => {
    try{
      const response = await checkoutAppointment({
        doctorId: id,
        scheduledAt: "",
        duration: 
      })
    }
    catch(error){
       console.error("Checkout failed:", error);
    }
  }
  const consultationFee = 600;

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Book <span className="text-teal-600">Appointment</span>
          </h1>
          <p className="text-gray-500 text-lg font-semibold mt-3">
            Please fill in the details below to confirm your appointment
          </p>
        </div>

        {/* Appointment Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
          {/* Doctor Info */}
          <div className="mb-6 text-center">
            <p className="text-lg font-semibold text-gray-800">
              Booking appointment with{" "}
              <span className="text-teal-600">Dr. Sophia Wilson</span>
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Patient Full Name"
              className="h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              maxLength={10}
              className="h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
            />

            <input
              type="date"
              className="h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
            />

            <select className="h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none">
              <option value="">Select Time Slot</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>02:00 PM</option>
            </select>
          </div>

          {/* Fee Summary */}
          <div className="border-t pt-4 mt-8">
            <div className="flex justify-between text-gray-700">
              <span>Consultation Fee</span>
              <span>₹{consultationFee}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mt-2 text-gray-900">
              <span>Total Amount</span>
              <span>₹{consultationFee}</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              label="Proceed to Payment"
              width={96}
              onClick={handleCheckout}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BookAppointment;
