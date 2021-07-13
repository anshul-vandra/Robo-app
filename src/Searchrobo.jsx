import React from 'react';
import { useState } from 'react';
import Header from './Header';

const Searchrobo = () => {
    const [val, uval] = useState('asd');
    const inpchng = (e) => {
        uval(e.target.value);
    }
    return (<>
        <br />
        <Header />
        <input style={{ textAlign: 'center', fontSize: '2rem', lineHeight: '60px', width: '100%', color: 'black' }} type="text" onChange={inpchng} placeholder="Enter your name" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={`https://robohash.org//${val ? val : 'asd'}?set=set2`} style={{ width: '300px', height: '400px' }} alt={val} />
        </div>
        <br />
    </>)

}
export default Searchrobo;