import React from "react";

function Task(props) {

    return (
        <li>
            <input type="checkbox" onClick={e => props.toggleStatus(props.id)}></input>
            <span id={props.id}>{props.description}</span>
            <button onClick={e => {e.stopPropagation(); props.removeTask(props.id)}}>X</button>
        </li>
    );
}

export default Task; 