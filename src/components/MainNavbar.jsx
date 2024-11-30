import { CubeIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../redux/auth/authSlice';

const MainNavbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const handleLogout = () => {
        dispatch(signOut());
    };

    return (
        <nav className="bg-gray-100 shadow-md border-b">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className='flex'>
                            <CubeIcon className="h-8 w-8 text-indigo-600" />
                            <span className="ml-2 text-2xl font-bold text-gray-900">PixelFace</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/project" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                            Projects
                        </Link>
                        <Link to="/upload" className="text-white bg-indigo-600 hover:bg-indigo-700 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                            Upload Video
                        </Link>
                        <div className="ml-3 relative">
                            <div>
                                <button
                                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                    className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    id="user-menu"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={user?.avatar || 'https://via.placeholder.com/40'}
                                        alt={user?.name || 'User avatar'}
                                    />
                                </button>
                            </div>
                            {isProfileMenuOpen && (
                                <div
                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu"
                                >
                                    <Link
                                        to="/account-settings"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Account Settings
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;

