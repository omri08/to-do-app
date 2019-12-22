import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {

    if (props.all.length === 0)
        return (
            <div>Nothing to do, Great job!</div>
        );

    const list = props.all.map((item) => {
        return (
            <ToDoItem
                item={item}
                key={item.id}
                onItemDone={props.onItemDone}
                onItemRemoved={props.onItemRemoved}
                onItemRedo={props.onItemRedo}
            />
        );
    }

    );
    return (
        <div>{list}</div>
    );
}

export default ToDoList;