import React, { memo } from 'react'

const Todos = ({ addTodo, todos }) => {
    console.log("Calling inside todos component...")
    return (
        <div>
            <h1>Todo here</h1>
            {todos.map((todo) => (
                <p>{todo}</p>
            ))}
            <button onClick={addTodo}>Add todo</button>
        </div>
    )
}

export default memo(Todos);