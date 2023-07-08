import React, { useCallback, useState } from 'react';
import Todos from './Todos';

const UseCallback = () => {
    const [todos, setTodos] = useState(["Eat lunch", "Do assignmnet"]);
    const [counter, setCounter] = useState(0);


    // function addTodo() {
    //     setTodos([...todos, "Come to classroom"])
    // }

    const addTodo = useCallback(() => {
        setTodos([...todos, "Come to classroom"])
    }, [todos])



    return (
        <div>
            <Todos todos={todos} addTodo={addTodo} />
            <h1>Counter : {counter}</h1>
            <button onClick={() => setCounter((prevState) => prevState + 1)}>+</button>
        </div>
    )
}

export default UseCallback