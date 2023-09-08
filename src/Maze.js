import React from 'react';
import './Maze.css';

function Maze({ mazeData }) {  

    // Rendering the maze
    // return (
    //     <div className="maze">
    //         {mazeData.map((row, rowIndex) => (
    //             <div key={rowIndex} className="maze-row">
    //                 {row.map((cell, cellIndex) => (
    //                     <div key={cellIndex} className={`maze-cell ${cell === 0 ? 'path' : 'wall'}`}></div>
    //                 ))}
    //             </div>
    //         ))}
    //     </div>
    // );
}

export default Maze;
