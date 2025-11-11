import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
    return (
        <div className="max-w-1/4 aspect-retro flex flex-col items-start justify-between py-5 ">
            <div>
                <h3 className='text-[3vw] leading-15 font-bold '>Prospective <br/> customer <br/> segmentation</h3>
                <p className='text-[1vw] mt-[10%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, deleniti quisquam? Adipisci laborum laudantium eos.</p>
            </div>
            <button>
                <ArrowUpRight size={80} />
            </button>
        </div>
    );
};

export default LeftContent;
