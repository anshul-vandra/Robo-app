import React from 'react';
import { forwardRef } from 'react';
import { useRef } from 'react';

const Forwardref = (props, ref) => {
    const fathernm = useRef(null);
    return (
        <input type="text"
            placeholder="enter your father's name"
            ref={ref}
            onKeyDown={props.fathernamekeydown} />
    )
}

const forwardinput = React.forwardRef(Forwardref);
export default forwardinput;