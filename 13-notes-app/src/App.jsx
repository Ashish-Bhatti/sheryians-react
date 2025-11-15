import React, { useState } from 'react';

const App = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    const [notes, setNotes] = useState([]);

    const deleteNote = (idx) => {
        let copyNotes = [...notes];

        copyNotes.splice(idx, 1);
        setNotes(copyNotes);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        let copyNotes = [...notes];
        copyNotes.push({ title: title, details: details });
        setNotes(copyNotes);

        // setTitle('');
        // setDetails('');
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
                    {notes.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className="flex flex-col items-start justify-between h-82 w-52 rounded-xl text-black p-7 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
                            >
                                <div>
                                    <h2>{item.title}</h2>
                                    <p className="text-[16px] text-gray-600">{item.details}</p>
                                </div>
                                <button
                                    onClick={() => {
                                        deleteNote(idx);
                                    }}
                                    className="bg-red-500 active:scale-95 py-1 w-full rounded font-semibold mx-auto text-[1rem] text-white"
                                >
                                    Delete
                                </button>
                            </div>
                        );
                    })}
                </div>
                ;
            </div>
        </div>
    );
};

export default App;
