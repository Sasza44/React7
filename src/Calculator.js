import React from 'react';
import Display from './Display.js';
import Buttons from './Buttons.js';

function Calculator() {
    return(
        <div className='calculator_color'>
            <Display />
            <Buttons />
        </div>
    )
}

export default Calculator;