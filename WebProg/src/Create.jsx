import React, { useState } from 'react'; // Importing useState hook
import axios from 'axios';

function Create(){
    const [task, setTask] = useState(''); // Initialize 'task' state with an empty string

    const handleAdd = () => {
        axios.post('http://localhost:3000/add', { task: task })
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <input type="text" placeholder='Enter Task' value={task} onChange={(e) => setTask(e.target.value)} />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create;
