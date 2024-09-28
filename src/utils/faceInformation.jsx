

import PropTypes from "prop-types";
import Render3DModel from "./render3DModel";

const FaceInformation = ({ facesDetected, objFile, handleFaceClick, handleClose }) => {
  return (
    <div className="p-6 space-y-8 bg-blue-50 rounded-xl shadow-lg border border-blue-200 relative">
     
      <h2 className="text-2xl font-bold text-blue-900 text-center sm:text-left">
        Faces Detected: {facesDetected.length}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 3D Model Viewer */}
        <div
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer p-6"
          onClick={() => handleFaceClick(objFile)}
        >
          <h3 className="text-lg font-semibold text-blue-800 mb-6 text-center">
            3D Model Viewer
          </h3>
          <div className="flex justify-center items-center h-48 sm:h-64 bg-blue-100 rounded-lg">
            {facesDetected.length > 0 ? (
              <Render3DModel objFile={objFile} />
            ) : (
              <p className="text-blue-500">No Faces Detected</p>
            )}
          </div>
        </div>

        {/* Face Details */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-6 text-center">
            Face Details
          </h3>
          <div className="space-y-4 text-center lg:text-left">
            {facesDetected.length > 0 && objFile ? (
              <>
                <p className="text-blue-700">
                  <span className="font-semibold">ID:</span> {objFile}
                </p>
                <p className="text-blue-700">
                  <span className="font-semibold">Total Faces:</span> {facesDetected.length}
                </p>
                <p className="text-blue-500">Other details...</p>
              </>
            ) : (
              <p className="text-blue-500">No face details available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

FaceInformation.propTypes = {
  facesDetected: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      objFile: PropTypes.string.isRequired,
    })
  ).isRequired,
  objFile: PropTypes.string.isRequired,
  handleFaceClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

FaceInformation.defaultProps = {
  facesDetected: [],
  objFile: "",
};

export default FaceInformation;
