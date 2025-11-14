import React, { useState } from 'react';

const App = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    const [notes, setNotes] = useState(second)

    const submitHandler = (e) => {
        console.log('hehe');
        e.preventDefault();
    };

    return (
        <div className="w-screen lg:h-screen md:h-full flex lg:flex-row flex-col gap-10 bg-black text-white p-10 text-2xl">
            <form className="flex flex-col gap-5 rounded-xl h-fit lg:w-1/2" onSubmit={(e) => submitHandler(e)}>
                <h1 className="text-3xl font-bold">Add Notes :-</h1>
                <input
                    className="bg-gray-800 p-5 rounded-2xl w-full"
                    type="text"
                    placeholder="Enter note title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <textarea
                    className="bg-gray-800 p-5 rounded-2xl w-full h-70"
                    type="text"
                    placeholder="Enter note details"
                    value={details}
                    onChange={(e) => {
                        setDetails(e.target.value);
                    }}
                />
                <button className="bg-blue-500 text-black rounded w-full py-2 ">Add Note</button>
            </form>

            <div className="px-5 lg:w-1/2 border-l-2 overflow-hidden">
                <h1 className="text-3xl font-bold mb-5">Notes :-</h1>

                <div className="scrollbar-hide flex flex-wrap gap-5 h-full overflow-auto">
                    <div className="h-82 w-52 bg-white rounded-xl text-black p-3">
                        <h2>drink water</h2>
                        <p className='text-[16px]'>5 times a day</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
