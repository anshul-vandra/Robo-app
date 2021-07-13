import React from 'react';
import Searchbox from './Searchbox'
import { robots } from './robots';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchinput: ''
        }
    }
    componentDidMount() {
        this.setState({ searchinput: 'anshul' });
    }
    render() {
        console.log(this.state.searchinput);


        return (
            <>
                <Searchbox />
            </>
        )
    }
}

export default App;