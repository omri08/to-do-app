import './ToDoItem.css';
import React from 'react';


class ToDoItem extends React.Component {


    render() {
        return (
            <div className="to-do ui yellow segment">
                <span className={`${this.props.item.markDone ? "done" : ""}`}>{this.props.item.name}</span>
                <i className={`vi check icon large`}
                    onClick={() => this.props.onItemDone(this.props.item)}></i>
                <i className="x close icon large"
                    onClick={() => this.props.onItemRemoved(this.props.item)}
                ></i>
                <i className="redo icon large"
                    onClick={() => this.props.onItemRedo(this.props.item)}
                ></i>
            </div>
        );
    }
}

export default ToDoItem;