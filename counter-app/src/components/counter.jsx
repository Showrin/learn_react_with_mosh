import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log(`Counter ${this.props.counter.id} DidUpdate Called`);
        console.log('Previous Props: ', prevProps.counter.value);
        console.log('Current Props: ', this.props.counter.value);
    }

    componentWillUnmount() {
        console.log(`Counter ${this.props.counter.id} willUnmount Called`);
    }

    render() {
        console.log(`Counter ${this.props.counter.id} Rendered`);
        return (
            <div className="d-flex w-100">
                <div className="d-flex w-10 align-items-center mr-2">
                    <span className={this.getBadgeClasses()}>
                        {this.formatCount()}
                    </span>
                </div>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2"
                >
                    +
                </button>
                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2"
                    disabled={this.isZero()}
                >
                    -
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    X
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'p-2 badge mx-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }

    isZero() {
        const { value } = this.props.counter;
        return value === 0 ? true : false;
    }
}

export default Counter;
