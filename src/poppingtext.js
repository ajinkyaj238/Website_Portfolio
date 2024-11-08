import React, { useEffect, useState } from 'react';

// Maintain a record of used positions to avoid overlap
let usedPositions = [];

const PoppingText = ({ text, type }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const isOverlapping = (newPosition) => {
    const padding = 7; // Adjust padding to avoid closeness between texts
    for (let pos of usedPositions) {
      if (
        Math.abs(newPosition.top - pos.top) < padding &&
        Math.abs(newPosition.left - pos.left) < padding
      ) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const randomPosition = () => {
      let top, left, newPosition;
      do {
        top = Math.floor(Math.random() * 80) + 10; // Leave some space at the top for <h2>
        left = Math.floor(Math.random() * 80) + 10; // Leave some space at the sides
        newPosition = { top, left };
      } while (isOverlapping(newPosition));

      usedPositions.push(newPosition);
      setPosition(newPosition);
    };

    randomPosition();
  }, []);

  return (
    <div
      className={`popping-text ${type}`}
      style={{ position: 'absolute', top: `${position.top}%`, left: `${position.left}%` }}
    >
      {text}
    </div>
  );
};

export default PoppingText;
