import React from 'react';

const CreateNewTask = ({onClick, className}) => {
    return (
        <button onClick={onClick} className={className}>Создать новый таск</button>
    );
};

export default CreateNewTask;