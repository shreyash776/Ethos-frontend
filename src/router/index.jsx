import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import SignIn from '../pages/Auth/SignIn.jsx';
import SignUp from '../pages/Auth/SignUp.jsx';
import Upload from '../pages/Upload/uploadPage.jsx';
import NotFoundPage from '../pages/NotFound/NotFoundPage.jsx';  

const Router = () => {
  const isAuthenticated = true;

  return (
    <Routes>
      {/* Public routes */}
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      
      {/* Protected routes */}
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={isAuthenticated ? <Upload /> : <Navigate to="/signin" />}
        />
      </Route>

      {/* 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;