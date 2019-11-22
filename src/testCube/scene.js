import React, { Component } from 'react';
import {vertexShader, fragmentShader} from "./cubeShaders";
import * as THREE from 'three';

class ThreeScene extends Component{

    componentDidMount(){

        console.log(vertexShader());
        console.log(fragmentShader());

        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        //ADD SCENE
        this.scene = new THREE.Scene();

        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        );

        this.camera.position.z = 4;

        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor('#000000');
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);

        let uniforms1 = {
            colorB: {type: 'vec3', value: new THREE.Color(0xACB6E5)},
            colorA: {type: 'vec3', value: new THREE.Color(0x74ebd5)}
        };

        //ADD CUBE
        const geometry = new THREE.BoxGeometry(1, 1, 1);

        const material =  new THREE.ShaderMaterial( {
            uniforms: uniforms1,
            vertexShader: vertexShader(),
            fragmentShader: fragmentShader()
        } );

        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
        this.start();
    }

    componentWillUnmount(){
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
    }

    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    }

    stop = () => {
        cancelAnimationFrame(this.frameId);
    }

    animate = () => {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera);
    }
    render(){
        return(
            <div
                style={{ width: '400px', height: '400px' }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}
export default ThreeScene;