import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Nav from './Nav';

const Login = () => {
    const [tmpnm,utmpnm]= useState('');
    const [name, uname] = useState('');

    useEffect(() => {
        document.title = `your name is ${name}`;
    }, [name])  

    const inpchng = (e) => {
        let a=e.target.value;
       utmpnm(a);
    }
    const submitclk=()=>
    {
        uname(tmpnm);
    }
    console.log(name);
    return (<>
        
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', width: '100%' }}>

                <label >{name!==''?<Nav name={name}/>:<h1>PLEASE YOUR NAME FIRST </h1>}
                <input type="text" placeholder='name' onChange={inpchng} style={{ lineHeight: '30px', textAlign: 'center' }} />
            </label>

            <button onClick={submitclk} style={{ lineHeight: '30px', textAlign: 'center' }}>SUBMIT</button>
        </div>
    </>)
}
export default Login;