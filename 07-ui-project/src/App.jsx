import React from 'react';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';

const App = () => {
    const users = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1976',
            intro: 'The service was excellent, and the user experience was smooth and intuitive. I found exactly what I needed without any hassle.',
            tag: 'Satisfied',
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
            intro: 'I loved how responsive and modern the interface felt. The performance and speed exceeded my expectations.',
            tag: 'UnderServed',
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
            intro: 'Great platform! The attention to detail and customer support really stood out. I will definitely recommend this to others.',
            tag: 'Underbanked',
        },
    ];

    return (
        <div>
            <Section1 userData={users}/>
            <Section2 />
        </div>
    );
};

export default App;
