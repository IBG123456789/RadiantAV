/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Events } from "./pages/Events";
import { Services } from "./pages/Services";
import { Quote } from "./pages/Quote";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top on route change
function ScrollToTopEffect() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Remaining placeholders
const FAQ = () => <div className="pt-40 pb-20 text-center text-4xl font-bold uppercase italic tracking-tighter">FAQ Coming Soon</div>;

export default function App() {
  return (
    <Router>
      <ScrollToTopEffect />
      <div className="min-h-screen bg-brand-dark flex flex-col selection:bg-brand-cyan selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
