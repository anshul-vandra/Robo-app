import React from 'react';
import { useState } from 'react';
import { useEffect, useDidCatch } from 'react';

const Error = (props) => {
    const [haserror, uhaserror] = useState(false);
    const caught = useDidCatch()
   
    useEffect(() => {
      const [error, info]=caught
        if (error !== null)
            uhaserror(true);
        else
            uhaserror(false);
    }, [caught])
   
   return (<>
        {haserror === false ? props.children : <h1>ooppsss Error occured</h1>}
    </>)
}
export default Error;