import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HelpSection from "../components/HelpSection";
import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <div>
      <Navbar />
      <div className="my-2">
        <Outlet />
      </div>
      <HelpSection />
      <Footer />
    </div>
  );
};

export default Default;
