import {MdAddCircle} from "react-icons/md";
import "./background.css";
import {useEffect, useState} from "react";
import {FaPencilAlt, FaTrashAlt} from "react-icons/fa";

const TodoInsert = ({onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate}) => {
    const [value, setValue] = useState("");
    const inputChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    }

    useEffect(
        () => {
            if (selectedTodo) {
                setValue(selectedTodo.text);
            }
        }, [selectedTodo]
    )

    return (
        <div>
            <div className="background" onClick={onInsertToggle}/>
            <form
                onSubmit={selectedTodo ? () => {
                    onUpdate(selectedTodo.id, value)
                } : onSubmit}
                className="insertForm"
            >
                <input
                    placeholder="내용을 적어주세요"
                    value={value}
                    onChange={inputChange}
                />
                {selectedTodo ?
                    <div className='rewrite'>
                        <FaPencilAlt onClick={() => {
                            onUpdate(selectedTodo.id, value)
                        }}/>
                        <FaTrashAlt onClick={() => {
                            onRemove(selectedTodo.id)
                        }}/>
                    </div>
                    : <button type="submit">
                        <MdAddCircle/>
                    </button>}
            </form>
        </div>
    )
}

export default TodoInsert;