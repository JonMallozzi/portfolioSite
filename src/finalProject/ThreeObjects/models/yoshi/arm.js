import * as THREE from "three";

//tried to model the arm for yoshi but gave up
//going to use a proper modeling tool such as blender on monday to make yoshi
//properly

export function arm(){
    let arm = new THREE.Shape();

    let x = 0, y = 0;

    arm.moveTo( x + 5, y + 5 );
    arm.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    arm.bezierCurveTo( x - 3, y, x - 3, y + 4.5,x - 3, y + 4.5 );
    // arm.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    // arm.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    // arm.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    // arm.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

    var geometry = new THREE.ShapeBufferGeometry( arm );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var mesh = new THREE.Mesh( geometry, material ) ;
    mesh.scale.set(0.25,0.25, 0.25);
    mesh.position.x -= 6;

    return mesh;
}