import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFaces = createAsyncThunk('faces/fetchFaces', async (projectId, { getState, rejectWithValue }) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/faces/${projectId}`);
        return response.data?.faces;
    } catch (error) {
        return rejectWithValue(error.response.data?.message);
    }
})

export const fetchFaceModel = createAsyncThunk('faces/faceModel', async (faceId, { getState, rejectWithValue }) => {
    const state = getState();
    const face = state.faces.recognizedFaces.find(f => f.id === faceId);

    if (state.faces.faceModelsCache[faceId]) {
        return { faceId, model: state.faces.faceModelsCache[faceId] }
    }

    const loader = new OBJLoader();

    var faceMaterial = new THREE.MeshLambertMaterial({
        vertexColors: THREE.VertexColors,
        shadowSide: THREE.DoubleSide,
        side: THREE.DoubleSide,
    });

    const model = await new Promise((resolve, reject) => {
        loader.load(faceObjUrl, (object) => {
            object.name = generateUUID();
            object.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = faceMaterial;
                }
            });

            resolve(object);
        },
            () => {
                // no updates
            },
            (error) => {
                console.error(error);
                reject(error);
            }, null, false
        );
    });

    return { faceId, model }
});

