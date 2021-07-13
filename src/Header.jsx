import React,{Component} from 'react';

class Header extends Component
{
    render()
    {
        return(
            <>
            
            <h1 style={{textAlign: 'center',
            backgroundColor: 'navy',
            color:'white',
            lineHeight:'100px',
            fontFamily: 'Luckiest Guy', 
            fontSize:'190%',
            boxShadow:'lightblue 5px 5px 5px',
            borderRadius:'10PX',
            borderColor:'black 30px'
            }}>FIND YOUR ROBO DOPPELGANGER</h1>
            <hr style={{lineHeight:"20px"}}></hr>
            </>
            )
    }
}
export default Header;