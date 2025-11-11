import { ChevronRight } from 'lucide-react';

const RightContentCard = ({userData}) => {
    return (
        <div className="bg-green-400 relative w-1/3 aspect-retro rounded-4xl overflow-hidden">
            <img
                className="h-full object-cover"
                src={userData.img}
                alt="img"
            />
            <div className="absolute top-0 left-0 p-[10%] flex flex-col justify-between h-full">
                <h2 className="bg-white w-10 h-10 text-[20px] rounded-full flex items-center justify-center">{userData.id}</h2>
                <div>
                    <p className='text-[17px] text-white mb-[10%]'>{userData.intro}</p>
                    <div className='flex justify-between items-center'>
                        <button className='bg-blue-500 text-white px-8 py-2 text-xl rounded-full'>{userData.tag}</button>
                        <button className='bg-blue-500 text-white px-3 py-2 text-xl rounded-full'>
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightContentCard;
