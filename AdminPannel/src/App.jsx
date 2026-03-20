import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import DashBoard from "./Pages/Dashboard/Dashboard";
import OurHistory from "./Pages/OurHistory/OurHistory";
import Teacher from "./Pages/Teacher/Teacher";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Admission from "./Pages/Admission/Admission";






function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Only Layout Route */}
   
        
<Route element={<AdminLayout/>}>
     <Route path="/" element={<DashBoard/>}/>    
     <Route path="/admin/ourhistory" element={<OurHistory/>}/>
     <Route path="/admin/teacher" element={<Teacher/>}/>
     <Route path="/admin/testimonial" element={<Testimonial/>}/>
     <Route path="/admin/admission" element={<Admission/>}/>
          
      

          

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;