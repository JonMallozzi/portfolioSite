//An actual model for a tv and base will be made in blender for the final project

import * as THREE from 'three';
import {noiseFragShader, noiseVertShader} from "./tvShader";

export function tv() {

    const tvBoxGeo = new THREE.BoxGeometry(1,1,1);

    //adding the noise shader to the tv
    let noiseUniforms = {
        "iResolution": { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        "iMouse": { value: new THREE.Vector2(0, 0) },
        "iTime": { value: 1.0 }
    };

    const tvMat = new THREE.ShaderMaterial({
        uniforms: noiseUniforms,
        vertexShader: noiseVertShader(),
        fragmentShader: noiseFragShader()
    });

    let tvBox = new THREE.Mesh(tvBoxGeo, tvMat);

    tvBox.position.set(-2.5,2,0);

    const boxMat = new THREE.MeshBasicMaterial({color: 0x964b00});

    const tvBaseGeo = new THREE.BoxGeometry(2,1,1);

    let tvBase = new THREE.Mesh(tvBaseGeo, boxMat);

    tvBase.position.y -= 1;

    tvBox.add(tvBase);


    return tvBox;


}