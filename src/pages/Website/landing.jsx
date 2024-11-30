import { ArrowRightIcon, CubeIcon, FaceSmileIcon, SparklesIcon } from '@heroicons/react/24/outline';
import React from 'react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation */}
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <CubeIcon className="h-8 w-8 text-indigo-600" />
                                <span className="ml-2 text-2xl font-bold text-gray-900">PixelFace</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <a href="#features" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                            <a href="#about" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
                            {/* <a href="/signin" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Use PixelFace
                            </a> */}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Revolutionizing</span>{' '}
                                    <span className="block text-indigo-600 xl:inline">Face Reconstruction</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    PixelFace is a cutting-edge research project exploring super-resolution and 3D face reconstruction models, pushing the boundaries of computer vision and AI.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a href="/waitlist" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                            Join the Waitlist
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full object-none" src="images/banner.jpg" alt="3D face reconstruction" />
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Advanced Face Reconstruction Technology
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Discover the power of PixelFace's cutting-edge algorithms and models.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <SparklesIcon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Super Resolution Models</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Enhance low-resolution images with our state-of-the-art super resolution models, bringing out details you never knew existed.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <CubeIcon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">3D Face Reconstruction</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Transform 2D images into accurate 3D face models, opening up new possibilities for facial analysis and recognition.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <FaceSmileIcon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Facial Expression Analysis</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Analyze and interpret facial expressions with high accuracy, enabling advanced emotion recognition applications.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <ArrowRightIcon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Real-time Processing</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Experience lightning-fast processing speeds, making our models suitable for real-time applications and live video streams.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* About the Researchers Section */}
            <div id="about" className="bg-gray-50 overflow-hidden">
                <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Meet the Researchers
                            </h2>
                        </div>
                        <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                            <div>
                                <dt>
                                    <p className="text-lg leading-6 font-medium text-gray-900">Ankur Debnath</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    CS undergrad at AKGEC, specializing in computer vision and deep learning. Lead researcher on super-resolution models, 3D-face reconstruction and Inference Systems.
                                </dd>
                            </div>
                            <div>
                                <dt>
                                    <p className="text-lg leading-6 font-medium text-gray-900">Akash L Rajput</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    CS undergrad at AKGEC, expert in Frontend Development. Spearheading the UI/UX and Frontend Applications of Pixelface.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-indigo-700">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block">Explore PixelFace today.</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-indigo-200">
                        Join us in revolutionizing face reconstruction technology and pushing the boundaries of computer vision.
                    </p>
                    <a
                        href="/waitlist"
                        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
                    >
                        Join the Waitlist
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

