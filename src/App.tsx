import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/shared/navbar";
import MobileNavbar from "./components/shared/mobileNav";
import Home from "./page/home/home";
import Recipe from "./page/recipe/recipe";
import Recipes from "./page/recipes/recipes";

import About from "./page/about/about";
import ScrollToTop from "./components/shared/ScrollToTop";
import Footer from "./components/shared/footer";

function App() {
  const onOpenEvent = () => {
    setOpen(!open);
  };
  let [open, setOpen] = useState(false);
  return (
    <HashRouter>
      <ScrollToTop />
      <MobileNavbar open={open} />
      <div
        className={` h-20 w-full fixed top-0 left-0 z-10  ${
          open ? "site-open" : "site-close"
        }`}
      >
        <Navbar open={open} onOpenEvent={onOpenEvent} />
      </div>
      <Routes>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </HashRouter>
  );
}

export default App;
