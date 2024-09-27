import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import PropTypes from "prop-types";

const style = {
  height: 500,
};

const Render3DModel = ({ objFile }) => {
  const thisRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    requestID: null,
    model: null,
  });
  const mountRef = useRef(null);

  useEffect(() => {
    thisRef.current.sceneSetup();
    thisRef.current.addLights();
    if (objFile) {
      thisRef.current.loadTheModel(objFile);
    }
    thisRef.current.startAnimationLoop();
    window.addEventListener("resize", thisRef.current.handleWindowResize);

    return () => {
      window.removeEventListener("resize", thisRef.current.handleWindowResize);
      window.cancelAnimationFrame(thisRef.current.requestID);
      if (thisRef.current.controls) {
        thisRef.current.controls.dispose();
      }
    };
  }, [objFile]); // Dependency on objFile

  thisRef.current.sceneSetup = () => {
    thisRef.current.scene = new THREE.Scene();
    thisRef.current.camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    thisRef.current.renderer = new THREE.WebGLRenderer();
    thisRef.current.renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(thisRef.current.renderer.domElement);

    thisRef.current.camera.position.set(25, 2, 5);
    thisRef.current.controls = new OrbitControls(
      thisRef.current.camera,
      thisRef.current.renderer.domElement
    );
    thisRef.current.controls.enableDamping = true; 
    thisRef.current.controls.dampingFactor = 0.25; 
    thisRef.current.controls.target.set(0, 0, 0); 
    thisRef.current.controls.update(); 
  };

  thisRef.current.addLights = () => {
    const light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 20, 0);
    thisRef.current.scene.add(light);
  };

  thisRef.current.loadTheModel = (objFile) => {
    const mtlLoader = new MTLLoader();
    const mtlPath = objFile.replace(/\.obj$/, '.mtl');

    mtlLoader.load(
      mtlPath,
      (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(
          objFile,
          (object) => {
            if (thisRef.current.model) {
              thisRef.current.scene.remove(thisRef.current.model);
            }
            thisRef.current.model = object;
            thisRef.current.scene.add(object);

            object.traverse((child) => {
              if (child.isMesh) {
                console.log("Applying material to:", child.name);
                if (!child.material) {
                  console.log("No material found for:", child.name);
                  child.material = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                  });
                }

                const box = new THREE.Box3().setFromObject(child);
                const center = new THREE.Vector3();
                box.getCenter(center);
                child.position.sub(center);
              }
            });
          },
          (xhr) => {
            const loadingPercentage = Math.ceil((xhr.loaded / xhr.total) * 100);
            console.log(`${loadingPercentage}% loaded`);
          },
          (error) => {
            console.error("An error happened:", error);
          }
        );
      },
      (xhr) => {
        const loadingPercentage = Math.ceil((xhr.loaded / xhr.total) * 100);
        console.log(`${loadingPercentage}% loaded`);
      },
      (error) => {
        console.error("An error happened:", error);
      }
    );
  };

  thisRef.current.startAnimationLoop = () => {
    const animate = () => {
      thisRef.current.requestID = requestAnimationFrame(animate);
      thisRef.current.controls.update(); 
      thisRef.current.renderer.render(
        thisRef.current.scene,
        thisRef.current.camera
      );
    };
    animate();
  };

  thisRef.current.handleWindowResize = () => {
    thisRef.current.camera.aspect =
      mountRef.current.clientWidth / mountRef.current.clientHeight;
    thisRef.current.camera.updateProjectionMatrix();
    thisRef.current.renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
  };

  return <div style={style} ref={mountRef} />;
};

Render3DModel.propTypes = {
  objFile: PropTypes.string.isRequired, 
};

export default Render3DModel;