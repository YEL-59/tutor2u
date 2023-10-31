import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import RequestTutor from "./Components/Pages/RequestTutor/RequestTutor";
import FindTutor from "./Components/Pages/FindTutor/FindTutor";
import NotFoundpage from "./Components/Pages/NotFoundPage/NotFoundpage";
import TutorDetails from "./Components/Pages/TutorProfileDetailsPage/TutorProfileDetails";
import BecomeaTutor from "./Components/Pages/BecomeaTutot/BecomeaTutor";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/request_tutor" element={<RequestTutor />} />
<Route path="/becomea_tutor" element={<BecomeaTutor/>}/>
        <Route path="/find_tutor/" element={<FindTutor />} />
        {/*  <Route path="/find_tutor" element={<FindTutor/>}/> */}
        <Route path="/tutor_details/:tutorId" element={<TutorDetails />} />
        <Route path="/404" element={<NotFoundpage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
};

export default App;
