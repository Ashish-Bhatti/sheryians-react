import Navbar from './Navbar';
import Page1Content from './Page1Content';

const Section1 = (props) => {
    return (
        <div className="h-screen w-full bg-gray-100 p-10">
            <Navbar />
            <Page1Content userData={props.userData}/>
        </div>
    );
};

export default Section1;
