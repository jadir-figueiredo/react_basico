import React from "react";

import Tasks from "./Task";

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((tasks) => (
                <Task  task={task} />
            ))}
        </>
    );
};

export default Tasks;