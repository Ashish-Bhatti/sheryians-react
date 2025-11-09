import React from 'react';
import Card from './components/Card';
import jobsData from './components/JobsData';

const App = () => {

    return (
        <div className="parent">
            {jobsData.map((item) => {
                return <Card key={item.id} job={item} />;
            })}
        </div>
    );
};

export default App;
