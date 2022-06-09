import React, {useState} from "react";

import InputField from "../input-field/input-field";
import ButtonsGroup from "../buttons-group/buttons-group";

import './App.css';
import getResult from "../service/service";

function App() {
  const arrNumbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

  const arrOperators = [
    '/', '*', '-', '+'
  ];

  const [result, stateResult] = useState(' ');
  const [input, stateInput] = useState('0');

  const reset = () => {
    stateInput('0');
    stateResult(' ');
  }

  const backspace = () => {
    if (input.length === 1 || input === 'Error') {
      stateInput('0');
      return;
    }

    const newInput = input.split('');
    newInput.pop();
    stateInput(newInput.join(''));
  }

  const handleClick = (item) => {
    if (item === ',') {
      item = '.';
    }

    if ((input === '0' && ~arrNumbers.indexOf(+item)) || input === 'Error') {
      stateInput('' + item);
    } else {
      stateInput('' + input + item);
    }
  }

  const handleKeyDown = (e) => {
    if (~arrOperators.indexOf(e.key) || ~arrNumbers.indexOf(+e.key) || e.code === 'NumpadDecimal' || e.code === 'Period') {
      handleClick(e.key);
    }

    if (e.key === 'Backspace') {
      backspace();
    }

    if (e.key === 'Enter') {
      handleSubmit();
    }

    if (e.key === 'Delete') {
      reset();
    }
  }

  const handleSubmit = async () => {
    const res = await getResult(input);
    stateInput(res);
    stateResult(input + '=');
  }

  return (
    <div className="App" onKeyDown={(e) => handleKeyDown(e)} tabIndex="0">
      <h1>Calculator</h1>
      <InputField result={result} input={input}/>
      <div className='reset-group'>
        <button className='reset' onClick={reset}>Reset</button>
        <button className='backspace' onClick={backspace}>⌫</button>
      </div>
      <ButtonsGroup arrNumbers={arrNumbers} arrOperators={arrOperators} handleClick={handleClick}
                    handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
