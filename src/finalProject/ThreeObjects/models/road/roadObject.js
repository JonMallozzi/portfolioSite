import * as THREE from 'three';

export function road() {
    let geometry = new THREE.PlaneBufferGeometry( 5, 20, 1 );
    let material = new THREE.MeshBasicMaterial( {color: 0x00000, side: THREE.DoubleSide} );
    return new THREE.Mesh( geometry, material );
}
