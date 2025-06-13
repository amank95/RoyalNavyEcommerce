import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";


// import AdminPannel from "../Admin/AdminPannel";
// import DemoAdmin from "../Admin/Views/DemoAdmin";

const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Admin/>}></Route>
        {/* <Route path="/demo" element={<DemoAdmin />}></Route> */}
      </Routes>
    </div>
  );
};

export default AdminRouter;
