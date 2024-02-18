import React, { useState } from "react";
import Task from "./Task";

function TaskManager() {
    // State for tasks themselves
    let [tasks, setTasks] = useState([]);
    // State for current task description to add
    let [des, setDescription] = useState('');
    // State for id for task list
    let [taskID, setTaskID] = useState(0);

    function addTask() {
        // Tasks is updated to prior tasks + new task
        setTasks([...tasks, {id: taskID, description: des}]);
        // taskID is incremented
        setTaskID(tid => tid + 1);
        // description is reset to empty string
        setDescription('');
    }
    
    // After tasks checkmark is checked or unchecked to show
    // status of task, this code will show a line through the
    // task description depending if it checked or not
    function toggleStatus(id) {
        // gets element (id is used it get single task)
        const text = document.getElementById(id);
        // complete is a css class that just makes the text have 
        // a line through it; this toggles that class on and off
        // element
        text.classList.toggle("complete")
    }

    // This is called to remove task
    function removeTask(id) {
        // splice is used to delete it from list, and findIndex
        // just finds the index of that specific task
        tasks.splice(tasks.findIndex(el => el.id === id), 1)
        // then tasks is updated
        setTasks([...tasks])
    }

    return (
        <div>
            <div className="box">
                <h1>Task Input Form</h1>
                <form onSubmit={e => {e.preventDefault(); addTask();}}>
                    <label for="des">Description </label>
                    <input id="description" type="text" name="des" value={des} onChange={e => setDescription(e.target.value)}></input>
                    <input id="submit" type="submit"></input>
                </form>
                <br />
                <hr />
                <h1>To Do List</h1>
                <ul>
                    {tasks.map(task => {
                        return(
                            <Task key={task.id} id={task.id} description={task.description} toggleStatus={toggleStatus} removeTask={removeTask} /> 
                        )        
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TaskManager;