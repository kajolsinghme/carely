import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import BookAppointment from "./pages/BookAppointment";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/book/:id" element={<BookAppointment />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/success" element={<BookingSuccess />} /> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
