import React, { useState } from 'react';

const App = () => {
    const [num, setNum] = useState({ name: 'ashu', age: 25 });
    const [arr, setArr] = useState(['ashu', 'ashu']);

    function update() {
        let newNum = { ...num };
        newNum.name = 'Rahul';
        newNum.age = 45;

        setNum(newNum);
    }

    function updateArr() {
        let newArr = [...arr];
        newArr[1] = 'Rahul';

        setArr(newArr);
    }

    return (
        <div>
            <div>
                <h1>
                    {num.name} {num.age}
                </h1>
                <button onClick={update}>click me</button>
            </div>
            <div>
                <h1>{arr[0]}, {arr[1]}</h1>
                <button onClick={updateArr}>update array</button>
            </div>
        </div>
    );
};

export default App;
