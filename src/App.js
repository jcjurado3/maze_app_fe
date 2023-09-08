import React, { useState, useEffect } from 'react';
import './App.css';
import Maze from './Maze';
import Maze3D from './Maze3D';

function App() {
    const [mazeData, setMazeData] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/generate_maze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setMazeData(data.maze))
        .catch(error => console.error('There was a problem with the fetch:', error));
    }, []);

    return (
        <div className="App">
            <Maze mazeData={mazeData} />
            <Maze3D mazeData={mazeData} />
        </div>
    );
}

export default App;
