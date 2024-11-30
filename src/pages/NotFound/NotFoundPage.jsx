import { ExclamationTriangleIcon, HomeIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <ExclamationTriangleIcon className="mx-auto h-12 w-12 text-indigo-600" aria-hidden="true" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            404 - Page Not Found
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
        <div className="mt-8">
          <p className="text-indigo-600 font-medium">
            Don't worry, even our advanced face recognition couldn't find this page.
          </p>
        </div>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <HomeIcon className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

