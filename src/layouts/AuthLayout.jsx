import Navbar from '../components/AuthNavbar'; 
import Footer from '../components/AuthFooter';
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <main className='bg-black'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


export default AuthLayout;