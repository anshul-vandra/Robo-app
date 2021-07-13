import React from 'react';
import RoboList from './RoboList'

class Searchbox extends React.Component {
    constructor() {
        super()
        this.state = {
            search: false,
            searchmsg: ''
        }
        this.inpchange = this.inpchange.bind(this)

    }
    inpchange(event) {
        event.preventDefault();
        this.setState({
            search: true,
            searchmsg: event.target.value
        })
    }

    render() {

        return (
            <>
                <div style={{}}>
                    <input onChange={this.inpchange}
                        style={{ width: '50%', color: 'black', margin: '5px 20% 10px ', backgroundColor: 'lightblue', textAlign: 'center', lineHeight: '30px' }} type="text" placeholder="SEARCH ROBO" />

                    {this.state.search === false ? <RoboList change={false} /> : <RoboList change={true} searchmsg={this.state.searchmsg} />}
                </div>
            </>
        )
    }
}
export default Searchbox;