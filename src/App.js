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

function App() {
  return (
    <>
      <NavBar />
      <main className="pt-24 text-white mx-auto max-w-screen-xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/financial-solutions" element={<FinancialSolutions />} />
          <Route
            path="/repayment-calculator"
            element={<RepaymentCalculator />}
          />
          <Route path="/repayment-breakdown" element={<RepaymentBreakdown />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
