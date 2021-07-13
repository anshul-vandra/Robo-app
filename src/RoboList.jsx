import React from 'react';
import Rocard from './Rocard';
import {robots} from './robots';
class RoboList extends React.Component

{
    // componentWillReceiveProps()
    // {
    // let change=this.props.change;
    // let msg=this.props.searchmsg;
    // console.log(msg);
    // this.setState({
    //     schange:change,
    //     smsg:msg});
    // }
    
    render()
    {
        let change=this.props.change;
        let msg=this.props.searchmsg;
        

        if(change===false) 
        {
        return(
            <>
            <div style={{display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        flexWrap:'wrap'
                        }}>
            {
                          
            robots.map((val,i)=>{
                return (<>
                <Rocard 
                    key={i}
                    id={robots[i].id}
                    name={robots[i].name}
                    username={robots[i].username}
                    email={robots[i].email} />  
                </>)     
            })} 
           </div>
           
            </>
              )
        } //if
        
        else
        {
            const filteredarry=robots.filter((val)=>
            {
                return val.name.toLowerCase().includes(msg.toLowerCase())
            });
            
            
            return(
                <>
                <div style={{display:'flex',
                            flexDirection:'row',
                            justifyContent:'center',
                            flexWrap:'wrap'
                            }}>
                {
                
                filteredarry.map((val,i)=>{
                    console.log(val.name);
                    return (<>
                    <Rocard 
                        key={i}
                        id={val.id}
                        name={val.name}
                        username={val.username}
                        email={val.email} />  
                    </>)     
                })} 
               </div>
               
                </>
                  )
           
        }
        
            
        
    }
}
export default RoboList;

