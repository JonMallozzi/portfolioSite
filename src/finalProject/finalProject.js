import React from 'react';
import '../App.css';
import './finalProject.css';
import {bob} from './test';
import {Link} from "react-router-dom";

const name = bob();

function Finalproject() {
    return (
        <div className="App">
            <header className="App-header">
                <p className="title">
                    <h1> Final Project </h1>
                    To be done
                    {name}

                </p>
            </header>
        </div>
    );
}

export default Finalproject;

