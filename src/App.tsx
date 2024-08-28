import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App=()=> {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <NavBar isTopOfPage={isTopOfPage} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div className="bg-red-800">Home</div>} />
          <Route path="/exercise/" element={<div className="bg-blue-800">Exercise</div>} />
          <Route path="/exercise/:id" element={<div className="bg-green-800">exercise id</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
