import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
    const [userData, setUserData] = useState([]);

    const [index, setIndex] = useState(1);

    const getData = async () => {
        let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`);
        setUserData(response.data);
    };

    useEffect(() => {
        getData();
    }, [index]);

    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <div className="flex justify-center mb-8 gap-6">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded  transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => {
                        if (index > 1) {
                            setIndex(index - 1);
                            setUserData([]);
                        }
                    }}
                >
                    Prev
                </button>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded  transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => {
                        setIndex(index + 1);
                        setUserData([]);
                    }}
                >
                    Next
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {userData.length === 0 ? (
                    <div className="text-xl font-medium text-gray-400 py-10">Loading...</div>
                ) : (
                    userData.map((item, idx) => (
                        <div
                            key={idx}
                            className="w-full sm:w-72 bg-gray-800 rounded-xl overflow-hidden shadow-xl transition duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                        >
                            <div className="aspect-video">
                                <img className="w-full h-full object-cover" src={item.download_url} alt={`Image ${idx + 1}`} />
                            </div>
                            <div className="p-4 text-sm text-gray-300">
                                <p className="font-medium truncate">{item.author}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="flex justify-center mb-8 gap-6 mt-6">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded  transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => {
                        if (index > 1) {
                            setIndex(index - 1);
                            setUserData([]);
                        }
                    }}
                >
                    Prev
                </button>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded  transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => {
                        setIndex(index + 1);
                        setUserData([]);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default App;
