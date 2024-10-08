import  { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Details from "./pages/Details";

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
          <Route path="exercise" element={<Exercise />} />
          <Route path="exercise/:id" element={<Details />} />
          <Route path="*" element={<NoPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
