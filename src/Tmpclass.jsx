import React, { Component } from 'react';

class Tmpclass extends Component
{
    state={counter:0};
    btnClk=()=>{

        // alert("emp added");
        this.setState({counter:this.state.counter+1});
        // alert("clicked"+this.state.counter);

    }
    btnRmv=()=>{
            if(this.state.counter>=0)
            {
                this.setState({counter:this.state.counter-1})
            }else{alert("counter")}
    }
    
    render()
    {
        
    return (
        <>
        <h1>welcome</h1>
        <br/>
        <h2><button onClick={this.btnClk}>add employe</button></h2>
        <h2><button onClick={this.btnRmv}>remove employe</button></h2>
        <p>clicked : {this.state.counter}</p>
        </>
    )
    }            
}


export default Tmpclass;