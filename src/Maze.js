import React, { useState, useEffect } from 'react';
import './Maze.css';

function Maze() {
    const [mazeData, setMazeData] = useState([]);

    // Fetch maze data when the component mounts
    useEffect(() => {
        fetch('http://localhost:5000/generate_maze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // your data here, if any
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

    // Rendering the maze
    return (
        <div className="maze">
            {mazeData.map((row, rowIndex) => (
                <div key={rowIndex} className="maze-row">
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex} className={`maze-cell ${cell === 0 ? 'path' : 'wall'}`}></div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Maze;
