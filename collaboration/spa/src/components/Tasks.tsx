import Task from "./Task";
import {TaskItem} from './Task';

interface TasksProps {
    tasks: TaskItem[];
}
const Tasks = (props:TasksProps) => {    
    return (
        <>
            {props.tasks.map((task) => (
                <Task key={task.id} task={task}/>
            ))}
        </>
    )
}

export default Tasks