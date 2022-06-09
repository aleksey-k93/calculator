import React from "react";
import './buttons-group.css';

const ButtonsGroup = ({arrNumbers, arrOperators, handleClick, handleSubmit}) => {

  const numbers = arrNumbers.map((item, idx) => {
    return (<button key={idx} className='numbers' onClick={() => handleClick(item)}>{item}</button>);
  });

  const operators = arrOperators.map((item, idx) => {
    return (<button key={idx} className='operators' onClick={() => handleClick(item)}>{item}</button>);
  });

  return (
    <div className='wrapper'>
      <div className='box1'>
        {numbers}
        <button className='submit' onClick={(e) => handleSubmit(e)}>=</button>
      </div>
      <div className='box2'>
        {operators}
      </div>
    </div>
  )
}

export default ButtonsGroup;