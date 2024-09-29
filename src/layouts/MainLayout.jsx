import { Outlet } from "react-router-dom";
import Navbar from "../components/MainNavbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;