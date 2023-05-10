import React from 'react';
import { useDispatch } from 'react-redux';
import { setMemory, setNumeric, setDisplayFromMemory, setOperation, setResult } from './features/displaySlice'; 

function Buttons() {
    const dispatch = useDispatch();
    return(
        <section>
            <button onClick={() => {dispatch(setDisplayFromMemory())}} className='memory'>mrc</button>
            <button onClick={() => {dispatch(setMemory('-'))}} className='memory'>m-</button>
            <button onClick={() => {dispatch(setMemory('+'))}} className='memory'>m+</button>
            <button onClick={() => {dispatch(setOperation('/'))}} className='sign'>/</button>
            <button onClick={() => {dispatch(setNumeric('7'))}} className='numeric'>7</button>
            <button onClick={() => {dispatch(setNumeric('8'))}} className='numeric'>8</button>
            <button onClick={() => {dispatch(setNumeric('9'))}} className='numeric'>9</button>
            <button onClick={() => {dispatch(setOperation('*'))}} className='sign'>*</button>
            <button onClick={() => {dispatch(setNumeric('4'))}} className='numeric'>4</button>
            <button onClick={() => {dispatch(setNumeric('5'))}} className='numeric'>5</button>
            <button onClick={() => {dispatch(setNumeric('6'))}} className='numeric'>6</button>
            <button onClick={() => {dispatch(setOperation('-'))}} className='sign'>-</button>
            <button onClick={() => {dispatch(setNumeric('1'))}} className='numeric'>1</button>
            <button onClick={() => {dispatch(setNumeric('2'))}} className='numeric'>2</button>
            <button onClick={() => {dispatch(setNumeric('3'))}} className='numeric'>3</button>
            <button onClick={() => {dispatch(setOperation('+'))}} className='sign'>+</button>
            <button onClick={() => {dispatch(setNumeric('0'))}} className='numeric'>0</button>
            <button onClick={() => {dispatch(setNumeric('.'))}} className='numeric'>.</button>
            <button onClick={() => {dispatch(setNumeric('C'))}} className='numeric'>C</button>
            <button onClick={() => {dispatch(setResult('='))}} className='equal'>=</button>
        </section>
    )
}

export default Buttons;