import {
  Fragment
} from "react"
import { routes } from "../routes"
import { Routes, Route } from "react-router-dom"
import React from 'react'
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import NotFound from "../pages/NotFound/NotFound";

function Routers() {
  return (
    <Fragment>
      <Navbar />
      <main className="main">
        <Routes>
          {/* Public routes */}
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          {/* Not Found */}
          {<Route path="*" element={<NotFound />} />}
        </Routes>
      </main>
      {
        <Footer />
      }
    </Fragment >
  );
}

export default Routers