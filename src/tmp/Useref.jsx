import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import ForwardRef from './Forwardref';

// accessibility
// useref and forwardref
const Userf = () => {
    const fname = useRef(null);
    const lname = useRef(null);
    const submit = useRef(null);
    const fthrnm = useRef(null);

    useEffect(() => {
        fname.current.focus();
    }, [])
    const fnamekeydown = (e) => {
        if (e.key === "Enter")
            lname.current.focus();
    }
    const lnamekeydown = (e) => {
        if (e.key === "Enter")
            fthrnm.current.focus();
    }
    const fathernamekeydown = (e) => {
        if (e.key === "Enter")
            submit.current.focus();
    }

    return (<>

        <h1>form</h1>
        <input type="text" onKeyDown={fnamekeydown} ref={fname} placeholder="enter your first name" /> <br />
        <input type="text" onKeyDown={lnamekeydown} ref={lname} placeholder="enter your last name" /> <br />
        <ForwardRef ref={fthrnm} fathernamekeydown={fathernamekeydown} />
        <button onClick={(() => alert('submited '))} ref={submit}>Submit</button>

    </>)
}
export default Userf;