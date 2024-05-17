const TodoItem = ({ todo, setTodos }) => {
    const {id, title, content, isDone} = todo;
    const deleteTodo = () => {
        setTodos((prev) => prev.fliter((todo) => todo.id !== id));
    }
    const toggleTodo = () => {
        prev.map((todo) => todo.id === id ? { ...todo, isDone : !todo.isDone} : todo)
    }

  return (
    <div className="card-list">
      <div className="card">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
      </div>
      <div className="card-btn">
        <button className="complete" onClick={toggleTodo}>{isDone ? '취소' : '완료'}</button>
        <button className="delete" onClick={deleteTodo}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;