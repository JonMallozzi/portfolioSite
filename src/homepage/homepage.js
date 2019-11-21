  
import React from 'react';
import './homepage.css';
import {Link} from "react-router-dom";

function Homepage() {
    return (
        <div className="App">
            <header className="App-header">
                <p class="title">
                    <h1> Jon Mallozzi's Portfolio </h1>
                    <h4 class="source">
                        <a href="https://www.github.com/JonMallozzi" class="links"> Github  </a>
                        |
                        <a href="https://gitlab.com/Blazefirer" class="links"> Gitlab </a>
                    </h4>
                    <h4 class="cos452">

                        Computer Graphics: &nbsp;

                        <Link to="/finalproject" class="links">
                            Final Project
                        </Link>

                    </h4>

                </p>
            </header>
        </div>
    );
}

export default Homepage;