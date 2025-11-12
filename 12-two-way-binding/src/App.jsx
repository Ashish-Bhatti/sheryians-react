import { useState } from 'react';

const App = () => {
    const [title, setTitle] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('hehe');
        setTitle(''); // empty the input field on submit
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="enter your name"
                    value={title} // it takes value from title
                    onChange={(e) => { // it set the title value so we can display that in above step
                        setTitle(e.target.value);
                        console.log(e.target.value);
                    }}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default App;
