import Header from "components/Header";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import Menu from "pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header />}> 
            <Route index element={<Home />} />
            <Route path='menu' element={<Menu />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}