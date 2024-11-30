import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { uploadUserVideo } from '../redux/video/videoAPI';
import { setError } from '../redux/video/videoSlice';

const UploadVideo = () => {
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragActive, setIsDragActive] = useState(false);

    const handleUpload = async () => {
        if (!selectedFile) {
            toast.error('Please select a file before submitting', { theme: "colored", autoClose: 2000 });
            return;
        }

        try {
            dispatch(uploadUserVideo({ videoFile: selectedFile }));
        } catch (error) {
            console.error('Error uploading file: ', error);
            dispatch(setError(`Error uploading file: ${error}`));
        }
    };

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setSelectedFile(file);
        setIsDragActive(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragActive(true);
    };

    const handleDragLeave = () => {
        setIsDragActive(false);
    };

    return (
        <div className="p-8">
            <div className="flex flex-col items-center">
                <div
                    className={`w-full max-w-md border-2 ${isDragActive ? 'border-indigo-500' : 'border-gray-300'
                        } border-dashed rounded-lg p-12 text-center cursor-pointer transition-all duration-300 ease-in-out ${isDragActive ? 'bg-indigo-50' : 'bg-white'
                        }`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                >
                    <input
                        type="file"
                        onChange={handleFileInput}
                        accept="video/mp4,video/avi,video/mkv"
                        className="hidden"
                        id="file-input"
                    />
                    <label
                        htmlFor="file-input"
                        className="flex flex-col items-center justify-center h-full"
                    >
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <span className="mt-2 block text-sm font-medium text-gray-900">
                            {selectedFile ? selectedFile.name : 'Drag & Drop a video or click to select'}
                        </span>
                        <span className="mt-1 block text-xs text-gray-500">
                            Supported formats: MP4, AVI, MKV
                        </span>
                    </label>
                </div>

                <button
                    onClick={handleUpload}
                    className="mt-6 w-full max-w-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Upload Video
                </button>
            </div>
        </div>
    );
}

export default UploadVideo;

