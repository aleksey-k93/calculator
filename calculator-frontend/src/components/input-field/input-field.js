import React, {memo} from "react";
import './input-field.css';

const InputField = ({result, input}) => {
  return (
    <div className='inputField'>
      <div className='result'>{result}</div>
      <div className='input'>{input}</div>
    </div>
  )
}

export default memo(InputField);