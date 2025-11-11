import React from 'react';

const App = () => {
    function click() {
        console.log('clicked');
    }
    let onEnter = () => {
        console.log('mouse enter');
    };

    function onLeave() {
        console.log('mouse leave');
    }

    function update(a) {
        console.log(a);
    }

    return (
        <div
            onWheel={(event) => {
                console.log(event.deltaY);
            }}
            onMouseMove={(event)=>{
                console.log(event.clientX, event.clientY)
            }}
        >
            <button onMouseLeave={onLeave} onMouseEnter={onEnter} onClick={click}>
                click me
            </button>
            <button onClick={() => console.log('hehe')}>try me</button>

            <input onChange={(event) => update(event.target.value)} type="text" placeholder="enter your name" />

            <input
                onChange={(event) => {
                    console.log(event.target.value);
                }}
                type="text"
                placeholder="enter your password"
            />
            <div></div>
        </div>
    );
};

export default App;
