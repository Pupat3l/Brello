import React from 'react';
import "./Board/board.css";

const Card = ({ task }) => {
  return (
    <div className='card'>
      {task.content}
    </div>
  );
};

export default Card;
