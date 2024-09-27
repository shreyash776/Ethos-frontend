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
    setIsFaceInfoVisible(true);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 mt-11">
        Upload Video for Face Detection
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4 text-gray-700 w-screen h-screen">
          {videoUrl && (
            <div className="mt-4">
              <video
                controls
                className="w-full h-full rounded-lg shadow-md"
                src={videoUrl}
                autoPlay
                onEnded={() => setIsFaceInfoVisible(false)} 
              />
            </div>
          )}
        </div>

       

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <label className="block ">
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
              className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full h-full block text-center"
            >
              Upload MP4 File
            </label>
          </label>

          <button
            onClick={handleProcessVideo}
            disabled={!videoFile || isProcessing}
            className={`py-2 rounded text-white transition 
      ${
        !videoFile || isProcessing
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-500 hover:bg-green-600"
      } w-full text-center`}
          >
            {isProcessing ? "Processing..." : "Process"}
          </button>

          <button
            onClick={handleShowFaceInfo}
            disabled={!objFile || isProcessing || !videoFile}
            className={`py-2 rounded text-white transition col-span-2 md:col-span-1 
      ${
        !objFile || isProcessing || !videoFile
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600"
      } w-full text-center`}
          >
            Show Face Information
          </button>
        </div>

        {!isFaceInfoVisible && (
          <div className="absolute top-0 h-full w-1/2 md:w-1/3 right-0 mt-36 bg-black bg-opacity-50" >
        <div className="p-5 backdrop-blur-md  mb-10">
            <FaceInformation objFile={objFile} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
