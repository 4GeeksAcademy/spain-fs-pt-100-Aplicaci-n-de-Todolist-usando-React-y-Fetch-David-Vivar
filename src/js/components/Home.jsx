import React from 'react'
//include images into your bundle
import { Lista } from "./Lista.jsx"
//create your first component
const Home = () => {
    return (
        <div className="container">
            <h1>todos</h1>
            <ul>
                <Lista />
            </ul>
        </div>
    );
};
export default Home;