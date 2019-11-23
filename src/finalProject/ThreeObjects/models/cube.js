import * as THREE from 'three';

export function cubeModel() {

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const material =  new THREE.MeshBasicMaterial({ color: '#433F81'});

    return new THREE.Mesh(geometry,material);

}



