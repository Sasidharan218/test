import React from "react";

export default function Chess(){
    const box = [];

    const Chessboard = () => {
        for (let i = 0; i < 8; i++) {
            const row = [];
            for (let j= 0; j<8; j++){
                const color = (i + j) % 2 === 0 ? 'white' : 'black';

                row.push(
                    <div key={i} style={{backgroundColor: color, height:"50px", width:"50px", display:"inline-block"}}></div>
                )
            }
            box.push(<div key={i}>{row}</div>)
        }
        return box;
    }
    return(
        <div>
            {Chessboard()}
        </div>
    )
}