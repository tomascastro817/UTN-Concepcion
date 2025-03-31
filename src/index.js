import React from 'react';
import ReactDOM from "react-dom/client";
import './assets/main.css';


import Home from "./pages/Home";
import IngSis from "./pages/IngSis";
import IngMec from "./pages/IngMec";
import IngElec from "./pages/IngEle";
import Prog from "./pages/TecProg";
import HyS from "./pages/TecHyS";
import Mecat from "./pages/TecMecat"; 
import Logistica from "./pages/TecLog";

import Error from "./pages/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendario from './pages/Calendario';

const router = createBrowserRouter([
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/IngenieriaSistemas",
    element: <IngSis />,
  },
  {
    path: "/IngenieriaMecanica",
    element: <IngMec />,
  },
  {
    path: "/IngenieriaElectronica",
    element: <IngElec />,
  },
  {
    path: "/TecnicaturaProgramacion",
    element: <Prog />,
  },
  {
    path: "/TecnicaturaHigieneSeguridad",
    element: <HyS />,
  },
  {
    path: "/TecnicaturaMecatronica",
    element: <Mecat/>,
  },
  {
    path: "/TecnicaturaLogistica",
    element: <Logistica/>,
  },
  {
    path: "/CalendarioAcademico",
    element: <Calendario/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);