import { useState } from "react"

const TodoForm = ({setTodos}) => {
    const onSubmit = (e) => {
        e.prevnetDefault();
        const formData = new FormData(e.target);
        const title = formData.get("title");
        const content = formData.get("content");

        if(!title.trim() || !content.trim()) return alert('제목과 내용을 입력해주세요.');

        const nextTodo = {
            id: crypto.randomUUID(),
            title,
            content,
            isDone: false,
        };

        setTodos((prevTodos) => [nextTodo, ...prevTodos]);

        e.target.reset();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>제목</label>
                <input type='text' name="title"></input> 
                <label>내용</label>
                <input type='text' name="content"></input>
                <button type='submit'>등록</button>
            </form>
        </div>
    )
}
export default TodoForm;