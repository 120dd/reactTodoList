import Template from "./component/Template";
import ToDoList from "./component/ToDoList";
import {useState} from "react";
import {MdAddCircle} from "react-icons/md";
import "./App.css"
import TodoInsert from "./component/TodoInsert";

let nextId = 4;

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "할일1",
            checked: true,
        },
        {
            id: 2,
            text: "할일2",
            checked: false,
        },
        {
            id: 3,
            text: "할일3",
            checked: true,
        }
    ]);
    const [insertToggle, setInsertToggle] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const onInsertToggle = () => {
        if (selectedTodo){
            setSelectedTodo(null);
        }
        setInsertToggle(pre => !pre);
    }
    const onInsertTodo = (text) => {
        if (text === "") {
            return alert("내용을 입력하세요")
        } else {
            const todo = {
                id: nextId,
                text,
                checked: false,
            }
            setTodos(currentArry => currentArry.concat(todo));
            nextId++;
        }
    }
    const onCheckToggle = (id) => {
        setTodos(todos =>
            todos.map(todo => (todo.id === id) ? {...todo, checked: !todo.checked} : todo
            )
        )
    }

    const onChangeSelectedTodo = (todo) => {
        setSelectedTodo(todo);
    }

    const onRemove = id => {
        onInsertToggle();
        setTodos(
            (todos) => {
                return  todos.filter(todo => todo.id !== id)
            }
        )
    }

    const onUpdate = (id, text) =>{
        onInsertToggle();
        setTodos(todos.map((todo)=>todo.id===id? {...todo,text: text} :todo))
    }

    return (
        <Template todosLength={todos.length}>
            <ToDoList
                todos={todos}
                onCheckToggle={onCheckToggle}
                onInsertToggle={onInsertToggle}
                onChangeSelectedTodo={onChangeSelectedTodo}
            />
            <div className="add-todo-button" onClick={onInsertToggle}>
                <MdAddCircle/>
            </div>
            {insertToggle ?
                <TodoInsert
                    onInsertTodo={onInsertTodo}
                    onInsertToggle={onInsertToggle}
                    selectedTodo={selectedTodo}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />
                : null}
        </Template>
    );
}

export default App;
