import React from 'react';
import { useSelector } from 'react-redux';

function Display() {
    const numeric = useSelector((state) => state.display.numeric)
    const m = useSelector((state) => state.display.m)
    return(
        <input className='display' name="display" value={m + numeric} readOnly />
    )
}

export default Display;