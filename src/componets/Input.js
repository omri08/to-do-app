import React from 'react';
import './Input.css';
class Input extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term);
        this.setState({ term: '' });
    }
    render() {
        return (

            <form onSubmit={this.onFormSubmit} className=" ui form">
                <div className="field">
                    <input
                        className="to-do-input"
                        type="text"
                        placeholder="What do you want to do today?"
                        value={this.state.term}
                        onChange={this.onInputChange} />
                    <button className="ui button" type="submit">Lets to It!</button>
                </div>
            </form>

        );
    };
};


export default Input;