import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";


import Teacher from "./Pages/Teacher/Teacher";
import Testimonial from "./Pages/Testimonial/Testimonial";

import NewsPosting from "./Pages/NewsPosting/NewsPosting";
import StudentAdmission from "./Pages/StudentAdmission/StudentAdmission";
import StudentAdmsnDetails from "./Pages/StudentAdmsnDetails/StudentAdmsnDetails";
import FeeCollection from "./Component/FeeCollection/FeeCollection";
import FeeType from "./Component/FeeType/FeeType";

import ProFilePicture from "./Pages/ProFilePicture/ProFilepicture";
import DashBoard from "./Pages/DashBoard/DashBoard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Only Layout Route */}
        <Route element={<AdminLayout/>}>
     <Route path="/" element={< DashBoard/>}/> 
     <Route path="/admin/newsposting" element={<NewsPosting/>}/>   
     <Route path="/admin/teacherposting" element={<Teacher/>}/>
     <Route path="/admin/testimonial" element={<Testimonial/>}/>
     <Route path="/student/admission" element={<StudentAdmission />} />
     <Route path="/student/admission/details" element={<StudentAdmsnDetails />} />
     <Route path="/fee-collect" element={<FeeCollection />} />
     <Route path="/fee-type" element={<FeeType />} />
     <Route  path="/admin/profile" element={< ProFilePicture />} />
  
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;