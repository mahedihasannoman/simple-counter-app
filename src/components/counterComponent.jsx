import React, { Component } from 'react';

/**
 * Counter component
 * This is a controlled component. Controlled by parent component Counters
 * @author Mahedi 
 */
class Counter extends Component {

    render() { 
        return (
            <div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button onClick={ () => this.props.onIncrement( this.props.counter ) } className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {

        //object desctucturing
        const { value } = this.props.counter;

        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;