import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import DashBoard from "./Pages/Dashboard/Dashboard";






function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Only Layout Route */}
   
        
<Route element={<AdminLayout/>}>
     <Route path="/" element={<DashBoard/>}/>    
          
      

          

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;