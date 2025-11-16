import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    function add1() {
        setCountA(countA + 1);
        console.log('countA is running')
    }

    function subtract1() {
        setCountB(countB - 1);
        console.log('countB is running')
    }

    useEffect(()=>{
      console.log('use-effect running .......')
    },[])

    return (
        <div>
            <div>
                <h1>
                    countA : {countA} countB: {countB}
                </h1>
            </div>
            <button onClick={add1}>addA</button>
            <button onClick={subtract1}>subtractB</button>
        </div>
    );
};

export default App;
