import PropTypes from "prop-types";
import Render3DModel from "./render3DModel";

const FaceInformation = ({ facesDetected, objFile, handleFaceClick }) => {

  return (
    <div className="block p-2 bg-gray-900">
      <h5 class="mb-4 text-2xl font-bold tracking-tight text-white h-full">Faces Detected: {facesDetected.length}</h5>

      <div className="flex flex-row space-x-4 mb-4">

        {facesDetected.map((face, index) => {
          return (
            <div key={index + 1} className="block max-w-20 min-h-32 bg-white rounded-sm">
              <img src={face.faceImageUrl}></img>
              <p className="text-black">{face.id}: {face.faceDepth}</p>
            </div>
          )
        })}

      </div>

      <div className="">
        <div
          className="bg-gray-700 rounded-lg flex cursor-pointer mb-4"
          onClick={() => handleFaceClick(objFile)}
        >
          {facesDetected.map((face) => {
            return (
              <div className="border-r-2 border-black p-2">
                {face.objFile ? (
                  <Render3DModel objFile={objFile} />
                ) : (<p>No OBJ file found</p>)}
              </div>
            )
          })}
        </div>

        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold">Face Details</h3>
          {facesDetected.map((face) => {
            return (
              <div>
                {face.objFile ? (
                  <div>
                    <p>{face.id}</p>
                    <p>{face.faceDepth}</p>
                  </div>
                ) : (<p>No face found</p>)}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

FaceInformation.propTypes = {
  facesDetected: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      objFile: PropTypes.string.isRequired,
      faceImageUrl: PropTypes.string.isRequired,
      faceDepth: PropTypes.number.isRequired,
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
  objFile: "",
};

export default FaceInformation;