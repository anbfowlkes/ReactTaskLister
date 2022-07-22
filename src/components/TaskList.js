import Task from './Task'
let c = 0
const TaskList = ( {tasks} ) => {
    return (
        <div> 
            <h3>My To-do's</h3>
            <ul>
                {tasks.map((task) => {
                    return(<Task key={c++} text={task} />)
                })}
            </ul>
        </div>
    )
}

export default TaskList