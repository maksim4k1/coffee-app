import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import generalRoutes from "../routes/generalRoutes";

function AppRoutes () {
  const [routes] = useState([...generalRoutes]);

  return(
    <Routes>
      {
        routes.map((route, index) => {
          return <Route key={index} {...route} />
        })
      }
      <Route path="*" element={<Navigate replace to="/error/404" />} />
    </Routes>
  );
}

export default AppRoutes;