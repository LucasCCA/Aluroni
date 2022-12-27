import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import About from "pages/About";
import Home from "pages/Home";
import Menu from "pages/Menu";
import NotFound from "pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />}> 
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}