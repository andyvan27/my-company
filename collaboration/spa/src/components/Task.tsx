interface TaskProps {
    task: TaskItem
}
export interface TaskItem {
    id:number,
    task:string
}
const Task = (props: TaskProps) => {
  return (
    <div>
        <h3>{props.task.id}. {props.task.task}</h3>
    </div>
  )
}

export default Task