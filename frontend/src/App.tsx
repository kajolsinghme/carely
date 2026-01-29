import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import BookAppointment from "./pages/BookAppointment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/book/:id" element={<BookAppointment />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
