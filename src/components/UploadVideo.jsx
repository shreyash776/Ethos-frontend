import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProcessing, uploadProgress, videoUploaded } from '../features/video/videoSlice';

const UploadVideo = () => {
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const progress = useSelector((state) => state.video.uploadProgress);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('video', file);

        dispatch(setProcessing(true));

        try {
            const response = await axios.post('https://localhost:5000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    dispatch(uploadProgress(progress));
                },
            });

            dispatch(videoUploaded(response.data.video));
            dispatch(setProcessing(false));
            navigate('/dashboard');
        } catch (error) {
            dispatch(setError(error.message))
            dispatch(setProcessing(false));
        }
    };

    // const checkStatus = async (taskId) => {
    //     const interval = setInterval(async () => {
    //         const res = await fetch(`http://localhost:5000/status/${taskId}`);
    //         const data = await res.json();

    //         upload(data.progress);
    //         setStatus(data.status);

    //         if (data.progress === 100) {
    //             clearInterval(interval);
    //         }
    //     }, 2000);
    // }

    return (
        <div>

            <h1 className="mb-5 text-3xl text-white text-center">Upload the Video File</h1>


            <div className="flex items-center justify-center w-full mb-5">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" accept=".mp4,.avi,.mkv" onChange={handleFileChange} />
                </label>
            </div>

            <div>
                <button
                    onClick={handleUpload}
                    className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full h-full block text-center"
                >
                    Upload MP4 File
                </button>
            </div>

            {progress > 0 && <div>Progress: {progress}%</div>}

        </div>
    )
}

export default UploadVideo;