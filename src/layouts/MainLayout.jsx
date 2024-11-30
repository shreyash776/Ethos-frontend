import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from '../components/AuthFooter';
import Navbar from "../components/MainNavbar";

const MainLayout = () => {

  const dispatch = useDispatch();

  return (
    <div className="h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

