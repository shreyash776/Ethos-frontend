import { Route, Routes } from 'react-router-dom';
// import AuthLayout from '../layouts/AuthLayout.jsx';
// import MainLayout from '../layouts/MainLayout.jsx';
// import SignIn from '../pages/Auth/SignIn.jsx';
// import SignUp from '../pages/Auth/SignUp.jsx';
// import Dashboard from '../pages/Dashboard/dashboard.jsx';
// import ProjectsPage from '../pages/Dashboard/projects.jsx';
import NotFound from '../pages/NotFound/NotFoundPage.jsx';
// import UploadPage from '../pages/Upload/uploadPage.jsx';
import LandingPage from '../pages/Website/landing.jsx';
import JoinWaitlist from '../pages/Website/waitlist_form.jsx';

const Router = () => {
  const isAuthenticated = true;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/waitlist" element={<JoinWaitlist />} />
      {/* {!isAuthenticated ? (
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      ) : (
        <>
          <Route element={<MainLayout />}>
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/process"
              element={<Dashboard />}
            />

          </Route>
        </>
      )} */}

      <Route path="*" element={<NotFound />} />
    </Routes >
  );
};

export default Router;