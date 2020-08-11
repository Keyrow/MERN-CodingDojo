import React from 'react';

const Task = ({ item, deleteTask, index, updateStatus }) => {

    const checkboxHandler = () => {
        console.log("checkboxHandler -> e", item, index)
        updateStatus(index)
    }

    const removeTask = () => {
        deleteTask(item)
        console.log("deleting")
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-3">
                    {item.description}
                </div>

                <div className="col-sm-3">
                    {/* removed {item.completed.toString()}, realized that it really isn't needed, looks cleaner when it shows "Status: Completed" with a checkbox */}
                    <span>Status: </span>
                    <label className="checkBox-container">
                        <input type="checkbox"
                            onChange={e => checkboxHandler()}
                            checked={item.completed} />
                        <span className="checkmark">Completed</span>
                    </label>
                </div>

                <div className="col-sm-2">
                    <a className="btn btn-dark text-white" onClick={removeTask}>Delete</a>
                </div>
            </div>
        </>
    )
}

export default Task;