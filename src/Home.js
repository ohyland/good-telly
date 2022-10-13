import React from "react";

import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <Routes>
      <Route exact path="/" element={<h2>Home</h2>}></Route>
    </Routes>
  );
};

export default Home;
