import * as THREE from 'three';
import {cubeModel} from "./models/cubes/cube";
import {road} from './models/road/roadObject'
import {beegYoshi} from "./models/yoshi/beegYoshi";
import {tv} from  './models/tv/tvModel';

export function defaultScene() {

    let scene = new THREE.Scene();

    const cube = cubeModel();
    cube.name = 'cube';

    cube.position.y += 2;

    scene.add(cube);

    const roadGeo = road();
    roadGeo.rotation.z = - Math.PI / 2;
    roadGeo.rotateY(90);
    scene.add(roadGeo);

    const yoshi = beegYoshi();
    yoshi.position.y += 4;
    yoshi.position.x += 4;
    scene.add(yoshi);



    scene.add(tv());




    return scene;

}