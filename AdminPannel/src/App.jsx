import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import DashBoard from "./Pages/Dashboard/Dashboard";

import Teacher from "./Pages/Teacher/Teacher";
import Testimonial from "./Pages/Testimonial/Testimonial";

import NewsPosting from "./Pages/NewsPosting/NewsPosting";






function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Only Layout Route */}
   
        
<Route element={<AdminLayout/>}>
     <Route path="/" element={<DashBoard/>}/> 
     <Route path="/admin/newsposting" element={<NewsPosting/>}/>   
     
     <Route path="/admin/teacherposting" element={<Teacher/>}/>
     <Route path="/admin/testimonial" element={<Testimonial/>}/>
  
          
      

          

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;