import { Bookmark } from 'lucide-react';

const Card = ({job }) => {
    console.log(job.companyName);

    return (
        <div className="child">
            <div className="top">
                <img src={job.companyLogo} alt="" />
                <button>
                    Save <Bookmark />
                </button>
            </div>
            <div className="middle">
                <p>
                    {job.companyName} <span>{job.postedAgo}</span>
                </p>
                <h2>{job.jobTitle}</h2>
                <ul>
                    {job.tags.map((item,idx) => {
                        return <li key={idx} className="tags">{item}</li>;
                    })}
                </ul>
            </div>
            <div className="bottom">
                <div>
                    <h2>{job.salary}</h2>
                    <p>{job.location}</p>
                </div>
                <button>Apply now</button>
            </div>
        </div>
    );
};

export default Card;
