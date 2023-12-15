import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchStocks } from "./redux/stocks/thunks/stock";
import Details from "./components/pages/Details";
import Home from "./components/pages/Home";
import HomePage from "./components/pages/HomePage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);

  return (
    <div>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
