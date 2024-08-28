import  { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";

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
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isTopOfPage={isTopOfPage} />}>
          <Route index element={<Home />} />
          <Route path="exercise" element={<div className="bg-blue-800">Exercise</div>} />
          <Route path="exercise/:id" element={<div className="bg-green-800">exercise id</div>} />
          <Route path="*" element={<NoPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
