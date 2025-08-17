
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/Terms";
import { Error } from "./pages/Error";
import { AboutUs } from "./pages/Aboutus";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";

function App() {

  return <><BrowserRouter>
  <Routes>
      <Route index element={< Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="*" element={<Error />} />
  </Routes>
  </BrowserRouter> </>
  
}

export default App
