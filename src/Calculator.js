import React, {useState} from 'react';
const Calculator = () =>{
    const[input,setInput]=useState('');
    const[result,setResult]=useState('');
    return(
        <div className='calculator'>
            <input className='input-field' type='text' value={input} readOnly />
            <button className='button' onClick={() => handleNumberClick('1')}>1</button>
            <button className='button' onClick={() => handleOperatorClick('+')}>+</button>
            <button className='button' onClick={handleEqualClick}>=</button>
            <button className='button' onClick={handleClearClick}>Clear</button>
            <p>{result}</p>
            </div>
    );

};
export default Calculator;