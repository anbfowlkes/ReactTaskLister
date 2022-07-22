import {useState} from 'react'

const TaskForm = ( {handleSubmit} ) => {
    const [text, setText] = useState('')

    return (
        <div>
            <form onSubmit={(e) => {e.preventDefault(); handleSubmit(text)}}>
                <label>Task Description:</label>
                <input onChange={(e) => { setText(e.target.value)}} type="text" placeholder="Description" />
                <input type="submit" value="Not the Gumdrop Buttons" />
            </form>
        </div>
    )
}

export default TaskForm