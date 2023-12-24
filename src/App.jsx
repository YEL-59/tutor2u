import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
//import BlogDetail from './Components/Pages/BlogDetail/BlogDetail';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import RequestTutor from './Components/Pages/RequestTutor/RequestTutor';
import FindTutor from './Components/Pages/FindTutor/FindTutor';
import BecomeaTutor from './Components/Pages/BecomeaTutot/BecomeaTutor';
import SignIn from './Components/Pages/SignIn/SignIn';
import SignUp from './Components/Pages/SignUp/SignUp';
import NotFoundpage from './Components/Pages/NotFoundPage/NotFoundpage';
//import TutionJob from './Components/Pages/TutionJob/TutionJob';
//import Resources from './Components/Pages/Resources/Resources';
import Blog from './Components/Pages/Blog/Blog';
import TutorProfileDetails from './Components/Pages/TutorProfileDetailsPage/TutorProfileDetails';
import TutionJob from './Components/Pages/TutionJob/TutionJob';
import TutionJobDetails from './Components/Pages/TutionJobDetails/TutionJobDetails';
import Resources from './Components/Pages/Resources/Resources';
//import TutionJobDetails from './Components/Pages/TutionJobDetails/TutionJobDetails';
//import TutorReviewPage from './Components/Pages/TutorreviewPage/TutorReviewPage';
//import DownloadResource from './Components/Pages/DownloadResource/DownloadResource';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/tutor_job" element={<TutionJob/>} />
        <Route path="/tutor_job_details" element={<TutionJobDetails/>} />
        {/* <Route path="/blog_detail" element={<BlogDetail />} /> */}
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/request_tutor" element={<RequestTutor />} />
        <Route path="/find_tutor" element={<FindTutor />} />
        <Route path="/tutor_details/:tutorId" element={<TutorProfileDetails />} />
        <Route path='/becomea_tutor' element={<BecomeaTutor />} />
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='/sign_up'  element={<SignUp />} />
        {/* <Route path='/tutor_job' element={<TutionJob />} />
        <Route path='/tutor_resources' element={<Resources />} /> */}
         <Route path='/tutor_resources' element={<Resources />} />
        <Route path='/tutor_blog' element={<Blog />} />
        {/* <Route path='/tutor_reviews' element={<TutorReviewPage />} />
        <Route path='/tutor_download_resource' element={<DownloadResource />} /> */}
        {/*  <Route path="/find_tutor" element={<FindTutor/>}/> */}




        {/* Tution job details dami route */}

        {/* <Route path='/tutor_job_details' element={<TutionJobDetails />} /> */}

{/*-------------------- NotFound page start--------------------- */}
        <Route path="/404" element={<NotFoundpage />} />
        <Route path="*" element={<Navigate to="/404" />} />
{/*---------------------- NotFound page End------------------------ */}
      </Routes>


    </>
  )
}

export default App