import React from 'react';
import '../App.css';
import './finalProject.css';
import FinalScene from './threejsInit'

function Finalproject() {
    return (
        <div className="App">
            <header className="App-header">
                <p className="title">
                    <h1> Final Project </h1>
                </p>
                <div id="ThreeScene" class="ThreeScene">
                    <FinalScene/>
                </div>
            </header>
        </div>
    );
}

export default Finalproject;

