import PropTypes from "prop-types";
import detectFaces from "../features/faceDetection/faceAPI";

const UploadFiles = ({ setMediaSrc, setMediaType, onFacesDetected }) => {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setMediaSrc(fileURL);
      const fileType = file.type.split("/")[0];
      setMediaType(fileType);

      if (fileType === "image") {
        const reader = new FileReader();
        reader.onload = async () => {
          const base64Image = reader.result.split(",")[1]; 
          try {
            const faces = await detectFaces(base64Image); // Detect faces
            console.log("faces", faces);
            onFacesDetected(faces); // Callback to pass faces
          } catch (error) {
            console.error("Error detecting faces:", error);
          }
        };
        reader.readAsDataURL(file);
      }

      if (fileType === "video") {
        alert("Video upload functionality coming soon!");
      }
    }
  };

  const handleConnectCamera = () => {
    alert("Camera connection functionality coming soon!");
  };

  return (
    <div className="flex justify-center items-end w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full text-xs md:text-sm lg:text-base">
        <label className="w-full py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition cursor-pointer text-center block whitespace-nowrap">
          Upload Video
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <label className="w-full py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition cursor-pointer text-center block whitespace-nowrap">
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <button
          onClick={handleConnectCamera}
          className="w-full py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition whitespace-nowrap col-span-2 sm:col-span-1"
        >
          Connect to Camera
        </button>
      </div>
    </div>
  );
};

UploadFiles.propTypes = {
  setMediaSrc: PropTypes.func.isRequired,
  setMediaType: PropTypes.func.isRequired,
  onFacesDetected: PropTypes.func.isRequired,
};

export default UploadFiles;