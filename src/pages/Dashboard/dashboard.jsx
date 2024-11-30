import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import FaceList from '../../components/FaceList';
import FaceModels from '../../components/FaceModels';
import VideoStream from '../../components/VideoStream';
import { setSelectedFace } from '../../redux/faces/facesSlice';

const DashboardPage = () => {
    const dispatch = useDispatch();
    const { recognizedFaces, loadingState, selectedFace } = useSelector(state => state.faces);

    const handleFaceSelect = (faceId) => {
        dispatch(setSelectedFace(faceId));
    }

    return (
        <div className="h-full bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Face Reconstruction Dashboard</h1>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6">
                        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                            <div className="lg:w-2/3">
                                <VideoStream />
                            </div>
                            <div className="lg:w-1/3 space-y-6">
                                <div className="bg-gray-50 p-4 rounded-md">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Recognized Faces</h2>
                                    <FaceList onFaceSelect={handleFaceSelect} />
                                </div>
                                <div className="bg-gray-50 p-4 rounded-md">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Face Models</h2>
                                    <FaceModels />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Process</h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                                    <span className="text-white font-medium">1</span>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Video Upload</h3>
                                    <p className="text-gray-500">Upload your video to start the face reconstruction process.</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                                    <span className="text-white font-medium">2</span>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Face Detection</h3>
                                    <p className="text-gray-500">Our AI detects and isolates faces in the video.</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                                    <span className="text-white font-medium">3</span>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">3D Model Generation</h3>
                                    <p className="text-gray-500">Advanced algorithms create detailed 3D models of detected faces.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;

