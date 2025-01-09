import React, { useState } from 'react';

const Display = ({ input, result }) => {
  return (
    <div className="display-container">
      <input type="text" value={input} readOnly className="display" />
      <input type="text" value={result} readOnly className="display result" />
    </div>
  );
};

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.name);
  };
 
  const clear = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => {
    setInput(input.slice(0, -1));           
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="keypad">
        <button onClick={clear} id="clear">Clear</button>
        <button onClick={backspace} id="backspace">C</button>
      
        <button name="%" onClick={handleClick}>%</button>
        <button name="/" onClick={handleClick}>&divide;</button>
    
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
    
        <button name="*" onClick={handleClick}>&times;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>

        <button name="-" onClick={handleClick}>&ndash;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>

        <button name="+" onClick={handleClick}>+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button onClick={calculate} id="result">=</button>
        
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Calculator />
      <style>{`
        .calculator {
          max-width: 400px;
          margin: 50px auto;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .display-container {
          display: flex;
          flex-direction: column; 
        }

        .display {
          background-color: #222;
          color: #fff;
          padding: 20px;
          font-size: 2em;
          text-align: right;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .display.result {
          background-color: #333;
          color: #ff9500;
        }

        .keypad {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          padding: 20px;
        }

        button {
          padding: 20px;
          font-size: 1.5em;
          border: none;
          border-radius: 5px;
          background-color: #f0f0f0;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #ddd;
        }

        button:active {
          background-color: #bbb;
        }

        button:nth-child(4n+4) {
          background-color: #ff9500;
          color: #fff;
        }

        button:nth-child(4n+4):hover {
          background-color: #e08900;
        }

        button:nth-child(4n+4):active {
          background-color: #c77c00;
        }
      `}</style>
    </div>
  );
}

export default App;
