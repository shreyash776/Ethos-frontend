import Navbar from "../components/MainNavbar";
import Footer from "../components/MainFooter";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;