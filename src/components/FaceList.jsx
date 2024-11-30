import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaces } from "../redux/faces/facesAPI";
import { setSelectedFace } from '../redux/faces/facesSlice';

const FaceList = () => {
  const dispatch = useDispatch();
  const { recognizedFaces, selectedFace } = useSelector((state) => state.faces);
  const { projectId } = useSelector((state) => state.auth);

  useEffect(() => {
    if (projectId) {
      dispatch(fetchFaces(projectId));
    }
  }, [projectId, dispatch]);

  const handleFaceClick = (faceId) => {
    dispatch(setSelectedFace(faceId));
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recognized Faces</h2>

        {recognizedFaces.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {recognizedFaces.map((face) => (
              <div
                key={face.id}
                className={`relative cursor-pointer rounded-lg overflow-hidden shadow-sm transition-all duration-200 ease-in-out transform hover:scale-105 ${face.id === selectedFace ? 'ring-2 ring-indigo-500' : 'hover:ring-2 hover:ring-indigo-300'
                  }`}
                onClick={() => handleFaceClick(face.id)}
              >
                <img
                  src={face.thumbnailUrl}
                  alt={`Face ${face.id}`}
                  className="w-full h-24 object-cover"
                />
                {face.id === selectedFace && (
                  <div className="absolute inset-0 bg-indigo-500 bg-opacity-30 flex justify-center items-center">
                    <span className="text-white text-xs font-medium px-2 py-1 bg-indigo-600 rounded-full">Selected</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-24 bg-gray-100 rounded-md text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>No faces available</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaceList;

