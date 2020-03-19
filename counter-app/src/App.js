import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
            { id: 4, value: 0 }
        ]
    };

    constructor() {
        super();
        console.log('App Constructor Called');
    }

    componentDidMount() {
        console.log('App DidMount Called');
    }

    componentDidUpdate() {
        console.log('App DidUpdate called');
    }

    onDelete = counterId => {
        this.setState({
            counters: this.state.counters.filter(
                counter => counter.id !== counterId
            )
        });
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(el => {
            el.value = 0;
            return el;
        });
        this.setState({ counters });
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value--;
        this.setState({ counters });
    };

    render() {
        console.log('App Rendered');
        return (
            <React.Fragment>
                <Navbar
                    totalCounters={
                        this.state.counters.filter(counter => counter.value > 0)
                            .length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onDelete={this.onDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onReset={this.handleReset}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
