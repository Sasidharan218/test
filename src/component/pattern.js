import React from "react";

export default function Pattern(){
    const pattern = [];

    const Showpattern = () => {
        for (let i = 1; i <= 5; i++) {
            let row = '';
            for (let j= 5; j>=1; j--){
                if(j === 5 - i + 1){
                    row += '*';
                }
                else{
                    row +=j;
                }

            }
            pattern.push(<div key={i}>{row}</div>)
        }
        return pattern;
    }
    return(
        <div>
            <h2>pattern</h2>
            {Showpattern()}
        </div>
    )
}