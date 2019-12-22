import React from 'react';
import Input from './Input'
import ToDoList from './ToDoList';
import createObjItem from '../handleItem'

class App extends React.Component {
    state = { allItems: [] };

    onFormSubmit = (term) => {
        let tempObj = createObjItem(term);
        let arr = this.state.allItems;
        arr.push(tempObj);
        this.setState({ allItems: arr });
    }

    onItemDone = (item) => {
        item.markDone = true;
        this.setState({ allItems: this.state.allItems });
    }

    onItemRedo = (item) => {
        item.markDone = false;
        this.setState({ allItems: this.state.allItems });
    }

    onItemRemoved = (item) => {
        item.delete = true;
        let arr = this.state.allItems;
        arr = arr.filter(value => value.delete === false);
        this.setState({ allItems: arr });

    }

    render() {
        return (
            <div className="ui container">
                <Input onFormSubmit={this.onFormSubmit} />
                <ToDoList
                    all={this.state.allItems}
                    onItemDone={this.onItemDone}
                    onItemRemoved={this.onItemRemoved}
                    onItemRedo={this.onItemRedo}
                />
            </div>
        );
    };

};

export default App;