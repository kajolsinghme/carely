import Button from "../components/Button";

declare global {
  interface Window {
    Razorpay: new (options: unknown) => { open: () => void };
  }
}

const Payment = () => {
  // const handlePayment = () => {
  //   alert("Hi")
  // }
  const handlePayment = async () => {
    try {
      // 1. Create order from backend
      const res = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 600, // example: consultation fee
        }),
      });

      const order = await res.json();

      // 2. Razorpay checkout options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // PUBLIC KEY ONLY
        amount: order.amount,
        currency: "INR",
        name: "Carely",
        description: "Doctor Consultation",
        order_id: order.id,

        handler: async function (response: unknown) {
          // 3. Verify payment
          await fetch("http://localhost:5000/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          });

          // 4. Redirect to success page
          window.location.href = "/booking-success";
        },

        prefill: {
          name: "Kajol Singh",
          email: "kajol@test.com",
          contact: "9999999999",
        },

        theme: {
          color: "#0D9488",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment failed", error);
    }
  };

  return (
    <div className="text-center mt-10">
      <Button
        label="Proceed to Payment"
        bgColor="bg-teal-600"
        onClick={handlePayment}
      />
    </div>
  );
};

export default Payment;
