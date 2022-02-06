import DdayTimer from "./DdayTimer";
import "./Template.css";

const Template = ({children,todosLength}) => {
    return (
        <div className="Template">
            <div className="header">
                <DdayTimer/>
            </div>
            <div className="title">오늘의 할일({todosLength})</div>
            <div>{children}</div>
        </div>
    )
}

export default Template;