import * as THREE from 'three';

export function beegYoshi(){

    const headGeo = new THREE.SphereBufferGeometry(1,  32, 32 );
    const headMat = new THREE.MeshBasicMaterial({color : 0x9ED148});

    const head = new THREE.Mesh(headGeo, headMat);
   // head.position.y += 4;

    const body = head.clone();
    body.scale.set(1.5,1.5,1.5);
    body.position.y -= 2;

    head.add(body);

    //everything put together
    /*let group = new THREE.Group();
    group.add(head);
    group.add(body); */

    return head;
}