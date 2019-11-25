//the js file that creates the beeg yoshi stuff animal model

//model's scene graph

/*
                                   head
------------------------------------------------------------------------------------------------
               |                  |                |                     |
             left cheek        right cheek        body                 nose
                |                   |              |                   |      |
             white part             white part     |                   eyes  nostrils
                                                   |
------------------------------------------------------------------------------------------------
                |                     |              |           |                |
                arms                  back shell     tail        legs             white belly
                 |                       |                          |
                thumbs (maybe)         white circle              shoes
                                                                    |
                                                                    brown cylinders
 */

import * as THREE from 'three';
import {arm} from "./arm";

export function beegYoshi(){

    //sphere mesh properties
    const headGeo = new THREE.SphereBufferGeometry(1,  32, 32 );
    const headMat = new THREE.MeshBasicMaterial({color : 0x9ED148});

    const head = new THREE.Mesh(headGeo, headMat);
   // head.position.y += 4;

    const rightCheek = new THREE.Mesh(headGeo, headMat);
    rightCheek.scale.set(0.5, 0.5, 0.5);
    rightCheek.position.x += 0.70;

    head.add(rightCheek);

    const leftCheek = new THREE.Mesh(headGeo, headMat);
    leftCheek.scale.set(0.5, 0.5, 0.5);
    leftCheek.position.x -= 0.70;

    head.add(leftCheek);

    //white spheres off the check
    const whiteMat = new THREE.MeshBasicMaterial({color : 0xFFFFFF});

    const whiteRightCheek = new THREE.Mesh(headGeo , whiteMat );
    whiteRightCheek.scale.set(0.25,0.25,0.25);
    whiteRightCheek.position.x += 0.95;

    rightCheek.add(whiteRightCheek);

    const whiteLeftCheek = new THREE.Mesh(headGeo , whiteMat );
    whiteLeftCheek.scale.set(0.25,0.25,0.25);
    whiteLeftCheek.position.x -= 0.95;

    leftCheek.add(whiteLeftCheek);

    const nose = new THREE.Mesh(headGeo, headMat);
    nose.scale.set(0.55,0.55,0.55);
    nose.position.z += 0.75;

    head.add(nose);


    const body = new THREE.Mesh(headGeo, headMat);
    body.scale.set(1.5,1.5,1.5);
    body.position.y -= 2;

    head.add(body);

    body.add(arm());

    //everything put together
    /*let group = new THREE.Group();
    group.add(head);
    group.add(body); */

    return head;
}