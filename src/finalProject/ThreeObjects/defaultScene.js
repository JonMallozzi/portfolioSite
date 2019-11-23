import * as THREE from 'three';
import {cubeModel} from "./models/cube";
import {road} from './models/road/roadObject'

export function defaultScene() {

    let scene = new THREE.Scene();

    let cube = cubeModel();
    cube.name = 'cube';

    cube.position.y += 2;

    scene.add(cube);

    let roadGeo = road();
    roadGeo.rotateX(90);
    scene.add(roadGeo);


    return scene;

}