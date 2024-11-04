import { useState } from "react";

const Country = ({country,handleMarkVisited}) => {
    // console.log(country);
    const {region,flags,status}  = country;

    const [visited,setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    const [btn, setBtn] = useState(false);

    const btnHandle = () => {
        setBtn(!btn)
    }

    return (
        <div>
            <h4>
                {region}
            </h4>
            <img src={flags.png} alt="" />
            <p>
                {status}
            </p>
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have already visited' : 'I will Go'}
            <button onClick={btnHandle}>{btn ? 'Visit' : 'Visiting'}</button>
            {btn ? 'Visit' : 'Visiting'}
            <button onClick={()=>handleMarkVisited(country)}>Mark Visited</button>
        </div>
    );
};

export default Country;