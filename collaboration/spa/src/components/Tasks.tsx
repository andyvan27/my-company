import {FunctionComponent} from 'react';
import Task from "./Task";
import {TaskItem} from './Task';

interface TasksProps {
    tasks: TaskItem[];
}
const Tasks:FunctionComponent<TasksProps> = ({tasks}) => {    
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task}/>
            ))}
        </>
    )
}
export default Tasks