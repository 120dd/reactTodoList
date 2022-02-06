import TodoItem from "./TodoItem";
import "./TodoItem.css";

const ToDoList = ({todos, onCheckToggle,onInsertToggle,onChangeSelectedTodo}) => {
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onCheckToggle={onCheckToggle}
                    onInsertToggle={onInsertToggle}
                    onChangeSelectedTodo={onChangeSelectedTodo}
                />
            ))}
        </div>
    )
}
export default ToDoList;