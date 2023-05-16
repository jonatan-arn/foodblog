import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/shared/navbar";
import MobileNavbar from "./components/shared/mobileNav";
import Home from "./page/home/home";
import Recipe from "./page/recipe/recipe";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  const onOpenEvent = () => {
    setOpen(!open);
  };
  let [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MobileNavbar open={open} />
      <div className={` h-20 w-full  ${open ? "site-open" : "site-close"}`}>
        <Navbar open={open} onOpenEvent={onOpenEvent} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
