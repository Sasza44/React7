import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numeric: '0', // число, яке відображається на дисплеї
    m: '  ', // індикація заповненої ячейки пам'яті
}

let mem = 0; // вміст ячейки пам'яті
let numeric_initial = 0; // змінна, яка зберігає початкове набране число
let operation_name = ''; // змінна, яка зберігає математичну операцію
let operation_result = 0; // змінна, яка зберігає результат операції
let symbols = 28; // кількість символів

export const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        setNumeric: (state, action) => { // функція, яка керує набором числа
            if(action.payload === 'C'){ // обнулення при натисканні клавіші 'C'
                state.numeric = '0';
                operation_result = 0;
            }
            else if(operation_result === 0) { // необхідна умова, щоб не додавались цифри до результату
                if(state.numeric === '0' && action.payload !== '.'){ // якщо перший набраний символ не крапка, то нуль замінюється на цифру
                    state.numeric = action.payload;
                }
                else {
                    if(state.numeric.indexOf('.', 0) !== -1 && action.payload === '.'){} // для того, щоб крапку не набрати двічі
                    else{
                        if(state.numeric.length <= symbols){ // можливість набрати не більше symbols символів
                            state.numeric += action.payload;
                        }
                    }
                }
            }
        },
        setDisplayFromMemory: (state) => { // функція зчитування та очищення ячейки пам'яті при натисканні клавіші 'mrc'
            operation_result = mem;
            state.numeric = String(operation_result);
            mem = 0;
            state.m = '  ';
        },
        setMemory: (state, action) => { // функція додавання/віднімання результату обчислень до ячейки пам'яті
            if(action.payload === '+'){
                mem += Number(state.numeric);
                state.m = 'M ';
            }
            else if(action.payload === '-'){
                mem -= Number(state.numeric);
                state.m = 'M ';
            }
        },
        setOperation: (state, action) => { // функція матаматичної операції
            numeric_initial = Number(state.numeric);
            state.numeric = '0';
            operation_result = 0;
            operation_name = action.payload;
        },
        setResult: (state) => { // функція виведення результату операції
            if(operation_name === '/'){
                operation_result = numeric_initial / Number(state.numeric);
            }
            else if(operation_name === '*'){
                operation_result = numeric_initial * Number(state.numeric);
            }
            else if(operation_name === '-'){
                operation_result = numeric_initial - Number(state.numeric);
            }
            else if(operation_name === '+'){
                operation_result = numeric_initial + Number(state.numeric);
            }
            state.numeric = String(operation_result);
        },
    },
})

export const { setNumeric, setDisplayFromMemory,setMemory, setOperation, setResult } = displaySlice.actions
export default displaySlice.reducer