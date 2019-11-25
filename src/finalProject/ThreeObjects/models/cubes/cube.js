//exports all the cubes to image using a scene graph
//the graph is simple the marble is a child of the main non textured cube and color texture is
//a child of the marble cube. Without even trying it orbits like the solar system

import * as THREE from 'three';
import {marbleFragShader,marbleVertShader,cloudFragShader} from "./cubeShaders";

export function cubeModel() {

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const material =  new THREE.MeshBasicMaterial({ color: '#433F81'});

    const parentCube = new THREE.Mesh(geometry,material);

    //adding the marble procedural texture cube
    //texture from https://www.shadertoy.com/view/MlB3R3
    let uniforms = {
        "iResolution": { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        "iMouse": { value: new THREE.Vector2(0, 0) },
        "iTime": { value: 1.0 }
    };

    const marbleMat = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: marbleVertShader(),
        fragmentShader: marbleFragShader()
    });

    const marbleCube = new THREE.Mesh(geometry, marbleMat);
    parentCube.add(marbleCube);

    //making the marbleCube not on top of the parent cube
    marbleCube.position.set(0,4,-3);

    //adding cloud noise cube
    //color is from https://www.shadertoy.com/view/3l23Rh
    const cloudMat = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: marbleVertShader(),
        fragmentShader: cloudFragShader()
    });

    const oceanCube = new THREE.Mesh(geometry, cloudMat);

    marbleCube.add(oceanCube);
    oceanCube.position.set(0,4.3,0);

    return parentCube;

}



