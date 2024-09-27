import PropTypes from "prop-types";
import Render3DModel from "./render3DModel";

const FaceInformation = ({ facesDetected, objFile, handleFaceClick }) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Faces Detected: {facesDetected.length}</h2>
      <div className="grid grid-rows-3 gap-2 h-full">
        <div
          className="row-span-1 bg-gray-700 rounded-lg p-4 flex justify-center items-center cursor-pointer"
          onClick={() => handleFaceClick(objFile)}
        >
          {facesDetected.length > 0  ? (
            <Render3DModel objFile={objFile} />
          ) : (
            <p>No Faces Detected</p>
          )}
        </div>

        <div className="row-span-2 bg-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold">Face Details</h3>
          {facesDetected.length > 0 && objFile ? (
            <div>
              <p>ID: {objFile}</p>
              <p>Other details...</p>
            </div>
          ) : (
            <p>No face details available</p>
          )}
        </div>
      </div>
    </>
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
  selectedFace: PropTypes.shape({
    id: PropTypes.number,
    objFile: PropTypes.string.isRequired,
  }),
  handleFaceClick: PropTypes.func.isRequired,
};

FaceInformation.defaultProps = {
  facesDetected: [],
  selectedFace: null,
  objFile:"",
};

export default FaceInformation;