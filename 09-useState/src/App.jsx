import { useState } from 'react';

const App = () => {
    const [num, setNum] = useState(0);
    function increaseCount() {
        setNum((prev) => prev + 1);
    }
    function decreaseCount(){
        setNum(num-1)
    }
    function jumpCount(){
        setNum(num+5)
    }
    return (
        <div className='main'>
            <h1>count : {num}</h1>
            <div className='btns'>
                <button onClick={increaseCount}>Increase</button>
                <button onClick={decreaseCount}>Decrease</button>
                <button onClick={jumpCount}>Jump by 5</button>
            </div>
        </div>
    );
};

export default App;
