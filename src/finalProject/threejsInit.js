import React, { Component } from 'react';
import * as THREE from 'three';
import {defaultScene} from "./ThreeObjects/defaultScene";

class FinalScene extends Component{

    componentDidMount(){

        let test = document.getElementById('ThreeScene').offsetWidth;

        console.log(test);

        const width = window.innerWidth * .85;
            //this.mount.clientWidth;
        const height = window.innerHeight * .85;

        //ADDS THE default scene
        this.scene = defaultScene();

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
       // this.renderer.setClearColor('#000000'); //black background
        this.renderer.setClearColor('#87ceeb');
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);

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
        this.scene.getObjectByName('cube').rotation.x += 0.01;
        this.scene.getObjectByName('cube').rotation.y += 0.01;
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
export default FinalScene;