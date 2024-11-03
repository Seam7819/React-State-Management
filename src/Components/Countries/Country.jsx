import { useState } from "react";

const Country = ({country}) => {
    console.log(country);
    const {region,flags,status}  = country;

    const [visited,setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
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
        </div>
    );
};

export default Country;