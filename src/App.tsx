import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/Terms";
import { Error } from "./pages/Error";
import { AboutUs } from "./pages/Aboutus";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";
import { Rooms } from "./pages/Rooms";
import { RoomDetails } from "./pages/RoomDetails";
import { Bookings } from "./pages/Bookings";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-token" element={<VerifyEmail />} />
          <Route path="/booking" element={<Bookings />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>{" "}
      <ToastContainer />
    </>
  );
}

export default App;
