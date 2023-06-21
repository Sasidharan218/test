import React from 'react';

const NumberList = () => {
  const result = [];
  let number = 1;

  const Result = () => {
    
    while (number <= 8) {
      const items = [];

      for (let i = 0; i < 3 && number <= 8; i++) {
        items.push(<li key={number}>{number}</li>);
        number++;
      }

      result.push(<ul key={number}>{items}</ul>);
    }

    return result;
  };

  return (
    <div>
      {Result()}
    </div>
  );
};

export default NumberList;
