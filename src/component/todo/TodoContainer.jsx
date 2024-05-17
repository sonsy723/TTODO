import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: '할일 1',
            content: '할일 1 내용',
            isDone: false,
        },
        {
            id: 2,
            title: '할일 2',
            content: '할일 2 내용',
            isDone: true,
        },
    ]);
    console.log(todos);
    const workingTodos = todos.filter((todo) => !todo.isDone);
    const doneTodos = todos.filter((todo) => todo.isDone);

    return (
        <section>
            <h1 className="title">TO DO LIST</h1>
            <TodoForm setTodos={setTodos} />
            <TodoList title='👩🏻‍💻 Working' todos={workingTodos} setTodos={setTodos}/>
            <TodoList title='🙆🏻‍♀️ Done' todos={doneTodos} setTodos={setTodos}/>
        </section>
    )
}

export default TodoContainer;