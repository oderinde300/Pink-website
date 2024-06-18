import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import FinancialSolutions from "./pages/FinancialSolutions";
import RepaymentCalculator from "./pages/RepaymentCalculator";
import RepaymentBreakdown from "./pages/RepaymentBreakdown";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import FloatingIcon from "./components/FloatingIcon";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();
  return (
    <>
      {/* <NavBar /> */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pink</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <main className="text-white mx-auto max-w-screen-xl">
        <FloatingIcon />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/financial-solutions"
              element={<FinancialSolutions />}
            />
            <Route
              path="/repayment-calculator"
              element={<RepaymentCalculator />}
            />
            <Route
              path="/repayment-breakdown"
              element={<RepaymentBreakdown />}
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
