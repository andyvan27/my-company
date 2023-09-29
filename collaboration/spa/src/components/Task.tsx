import {FunctionComponent} from 'react';
interface TaskProps {
    task: TaskItem
}
export interface TaskItem {
    id:number,
    task:string
}
const Task:FunctionComponent<TaskProps> = ({task}) => {
  return (
    <div>
        <h3>{task.id}. {task.task}</h3>
    </div>
  )
}
export default Task