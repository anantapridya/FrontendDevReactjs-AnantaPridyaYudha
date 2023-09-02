import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/Main";
import DetailRestaurant from "./pages/DetailRestaurant";

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/detail/:id" element={<DetailRestaurant />} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
