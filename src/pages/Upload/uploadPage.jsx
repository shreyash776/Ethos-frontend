
import { useState } from "react";
import axios from "axios";
import FaceInformation from "../../utils/faceInformation";

const UploadPage = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isFaceInfoVisible, setIsFaceInfoVisible] = useState(false);
  const [objFile, setObjFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "video/mp4") {
      setVideoFile(file);
    }
  };

  const handleProcessVideo = async () => {
    if (!videoFile) return;

    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append("video", videoFile);

      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setObjFile(response.data.objFile);
      setVideoUrl(response.data.videoUrl);
    } catch (error) {
      console.error("Error processing video:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleShowFaceInfo = () => {
    setIsFaceInfoVisible(!isFaceInfoVisible); 
  };

  return (
    <div className="mt-10 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 bg-blue-600 inline-block px-4 py-2 rounded-lg shadow-lg transform -skew-x-6">
          Upload Video for Face Detection
        </h1>

        <div className="bg-gray-800 rounded-xl shadow-2xl p-6 mb-8">
          <div className="aspect-w-16 aspect-h-9 mb-6 bg-black rounded-lg overflow-hidden">
            {videoUrl ? (
              <video
                controls
                className="w-full h-full object-cover"
                src={videoUrl}
                autoPlay
                onEnded={() => setIsFaceInfoVisible(false)}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-400">No video uploaded yet</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <label className="block">
              <span className="sr-only">Upload Video (MP4)</span>
              <input
                type="file"
                accept="video/mp4"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out w-full block text-center font-semibold"
              >
                Upload MP4 File
              </label>
            </label>

            <button
  onClick={handleProcessVideo}
  disabled={!videoFile || isProcessing}
  className={`py-3 rounded-lg text-white transition duration-300 ease-in-out font-semibold
    ${
      !videoFile || isProcessing
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-green-500 hover:bg-green-600"
    } w-full text-center`}
>
  {isProcessing ? "Processing..." : "Process"}
</button>

<button
  onClick={handleShowFaceInfo}
  disabled={!videoFile || isProcessing} 
  className={`py-3 rounded-lg text-white transition duration-300 ease-in-out font-semibold
    ${
      !videoFile || isProcessing
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-green-500 hover:bg-green-600"
    } w-full text-center sm:col-span-2 lg:col-span-1`}
>
  {isFaceInfoVisible ? "Hide Face Information" : "Show Face Information"}
</button>
          </div>
        </div>

        
        {isFaceInfoVisible && (
          <div className="fixed top-0 right-0 h-full w-full sm:w-2/3 lg:w-1/2 bg-gray-900 bg-opacity-95 overflow-y-auto transform transition-transform duration-300 ease-in-out z-50">
            <div className="p-6">
              <button
                className="absolute z-20 top-5 right-5 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-300 bg-transparent border-2 border-blue-600 rounded-full p-2 w-8 h-8 flex justify-center items-center shadow-lg focus:outline-none"
                onClick={() => setIsFaceInfoVisible(false)}
              >
                 ✕
              </button>
              <FaceInformation objFile={objFile} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
