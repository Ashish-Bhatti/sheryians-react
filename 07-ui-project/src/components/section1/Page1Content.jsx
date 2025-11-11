import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Page1Content = (props) => {
    return (
        <div className='h-[80vh] flex gap-10'>
            <LeftContent />
            <RightContent userData={props.userData} />
        </div>
    );
};

export default Page1Content;
