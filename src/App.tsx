import  { useEffect, useState } from "react";
import Layout from "./components/Layout";
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
      {/* <NavBar isTopOfPage={isTopOfPage} />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div className="bg-red-800">Home</div>} />
          <Route path="/exercise/" element={<div className="bg-blue-800">Exercise</div>} />
          <Route path="/exercise/:id" element={<div className="bg-green-800">exercise id</div>} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isTopOfPage={isTopOfPage} />}>
          <Route index element={<div className="bg-red-800">Home</div>} />
          <Route path="exercise" element={<div className="bg-blue-800">Exercise</div>} />
          <Route path="exercise/:id" element={<div className="bg-green-800">exercise id</div>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
