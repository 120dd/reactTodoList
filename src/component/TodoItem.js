import {MdCheckBoxOutlineBlank, MdCheckBox} from "react-icons/md"

const TodoItem = ({todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => {
    const {id, text, checked} = todo;
    return (
        <div className="TodoItem">
            <div className={`content ${checked ? 'checked' : ''}`}>
                {checked ? (
                    <MdCheckBox onClick={() => {onCheckToggle(id)}}/>
                ) : (
                    <MdCheckBoxOutlineBlank onClick={() => {onCheckToggle(id)}}/>
                )}
                <div onClick={()=> {
                    onChangeSelectedTodo(todo);
                    onInsertToggle();
                }} className="text">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default TodoItem;