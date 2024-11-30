import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { objectReframer } from '../utils/objectReframer';
import { fetchFaceModel } from './../redux/faces/facesAPI';

const FaceModels = () => {
    const containerRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);

    const dispatch = useDispatch();
    const { recognizedFaces } = useSelector((state) => state.faces);
    const { selectedFace, faceModelsCache, status, loadingStates } = useSelector((state) => state.faces);
    const loading = loadingStates[selectedFace];

    const [scene, setScene] = useState(null);
    const [reframer, setReframer] = useState(null);

    useEffect(() => {
        if (selectedFace && !faceModelsCache[selectedFace]) {
            dispatch(fetchFaceModel(selectedFace));
        }
    }, [selectedFace, faceModelsCache, dispatch]);

    useEffect(() => {
        if (!containerRef.current) return;

        const sceneInit = new THREE.Scene();
        sceneInit.background = new THREE.Color(0xf3f4f6); // Light gray background

        const cameraInit = new THREE.PerspectiveCamera(60, containerRef.current.clientWidth / containerRef.current.clientHeight, 10, 100000);
        cameraInit.position.set(1000, 4000, 1170);

        const rendererInit = new THREE.WebGLRenderer({ antialias: true });
        rendererInit.setPixelRatio(window.devicePixelRatio);
        rendererInit.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        containerRef.current.appendChild(rendererInit.domElement);

        const controlsInit = new OrbitControls(cameraInit, rendererInit.domElement);
        controlsInit.enableDamping = true;
        controlsInit.dampingFactor = 0.05;
        controlsInit.screenSpacePanning = false;
        controlsInit.minDistance = 10;
        controlsInit.maxDistance = 100000;
        controlsInit.maxPolarAngle = Math.PI;
        controlsInit.update();

        const ambientLight = new THREE.AmbientLight(0x808080);
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(2, -1, 2);

        sceneInit.add(ambientLight, directionalLight);

        const reframerInit = new objectReframer({ camera: cameraInit, controls: controlsInit });
        setReframer(reframerInit);

        setScene(sceneInit);

        const handleResize = () => {
            cameraInit.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
            cameraInit.updateProjectionMatrix();
            rendererInit.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (scene && selectedFace) {
            if (faceModelsCache[selectedFace]) {
                displayModel(faceModelsCache[selectedFace]);
            }
        }
    }, [selectedFace, scene, faceModelsCache]);

    const displayModel = (model) => {
        while (scene.children.length > 0) {
            scene.remove(scene.children[0]);
        }
        scene.add(model);
        reframer.reFrame(model);

        const animate = () => {
            requestAnimationFrame(animate);
            controlsRef.current.update();
            rendererRef.current.render(scene, cameraRef.current);
        };
        animate();
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">3D Face Models</h2>
                {recognizedFaces.length > 0 ? (
                    <div ref={containerRef} className="w-full h-64 bg-gray-100 rounded-md relative">
                        {loading === 'loading' && (
                            <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center">
                                <div className="text-indigo-600 font-medium">Loading model...</div>
                            </div>
                        )}
                        <div className={`${loading === 'loading' ? 'filter blur-sm' : ''} transition-all duration-300`}></div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-64 bg-gray-100 rounded-md text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>No 3D Models Available</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FaceModels;

