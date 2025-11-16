import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState([]);

    // async function getData() {
    //     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     let data = await response.json();
    //     console.log(data);
    //     setData(data);
    // }

    // const getData = async () => {
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //     const data = response.data;
    //     setData(data);
    //     console.log(data);
    // };

    const getImage = async () => {
        const response = await axios.get('https://picsum.photos/v2/list');
        const data = response.data;

        setData(data);
        console.log(data);
    };

    return (
        <div>
            <button onClick={getImage}>getImage</button>
            <div className='image-container'>
                {data.map((item, idx) => {
                    return <img key={idx} src={item.download_url} alt="omg" />;
                })}
            </div>
        </div>
    );
};

export default App;
