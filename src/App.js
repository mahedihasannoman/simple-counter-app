import React, { Component } from 'react';
import NavBar from './components/navBar';
import Counters from './components/countersComponent';

class App extends Component {

    state = {
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 },
        ]
    };

    // formal approach for getting reference to this keyword for onClick
    /*constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    } */


    handleDelete = (counter) => {
        const counters = this.state.counters.filter( (c) => c.id !== counter.id );
        this.setState({ counters });
    }
    handleIncrement = ( counter ) => {
        const counters = this.state.counters.map( (c) => {
            c.value = c.id === counter.id ? c.value + 1 : c.value;
            return c;
        } );
        this.setState({counters});
    }
    handleReset = () => {
        const counters = this.state.counters.map( ( c ) => {
            c.value = 0;
            return c;
        } );
        this.setState({counters});
    }

    render() { 
        return ( 
            <React.Fragment>
                <NavBar 
                    totalCounters={ this.state.counters.filter( c => c.value > 0 ).length }
                />
                <main className="container" >
                    <Counters 
                        onReset={ this.handleReset }
                        counters={this.state.counters}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    /> 
                </main>
            </React.Fragment>
            
        );
    }
}
 
export default App;