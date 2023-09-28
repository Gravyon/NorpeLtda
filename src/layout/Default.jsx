import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <div>
      <Navbar />
      <div className="my-8">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Default;
