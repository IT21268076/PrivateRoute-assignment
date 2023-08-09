import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

import AddEmployeeForm from "./components/employeereg"; 
import LoginEmployeeForm from "./components/authentication"; 
import UpdateEmployeeForm from "./components/employeeUpdate";
import ActivityTracker from "./components/ActivityTracker";
import Logout from "./components/logout";
import EmployeeReport from "./components/employeeReport";
import Sidebar from "./components/Sidebar";
import AdminDashboard from "./components/adminDashboard";
import EmployeeDashboard from "./components/employeeDashboard";
import HomePage from "./components/Home";
import EmployeeDisplayAll from "./components/employeeDisplayAll";
import EmployeeProfile from "./components/employeeProfile";
import ConsultForm from "./components/consultForm";
import ConsultTable from "./components/consultTable";
import DoctorDashboard from "./components/doctorDashboard";
import empSidebar from "./components/empSidebar";
import DeleteOne from "./components/delete";
import Header from "./components/Header";

import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/authenticate" element={<LoginEmployeeForm />} />
        
        <PrivateRoute>
          <Route path="/add" element={<AddEmployeeForm />} /> 
          <Route path="/track" element={<ActivityTracker />} /> 
          <Route path="/logout" element={<Logout />} /> 
          <Route path="/empReport" element={<EmployeeReport />} />
          <Route path="/displayall" element={<EmployeeDisplayAll />} />
          <Route path="/display/:eid" element={<UpdateEmployeeForm />} />
          <Route path="/displayone" element={<EmployeeProfile />} />
          <Route path="/displayby/name/:name" element={<EmployeeProfile />} />

          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
          <Route path="/employees/count" element={<AdminDashboard />} />

          <Route path="/delete/:eid" element={<DeleteOne />} />
        </PrivateRoute>
        
          <Route path="/sconsult" element={<ConsultForm />} />
          <Route path="/doctorDashboard" element={<DoctorDashboard />} />
          <Route path="/gconsult" element={<ConsultTable />} />
        
          <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
