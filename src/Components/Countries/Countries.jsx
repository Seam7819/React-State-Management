import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {

    const [countries, setCountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    const [markVisited, setMarkVisited] = useState([]);

    const handleMarkVisited = (country) => {
        const newVisitedCountry = [...markVisited, country];
        setMarkVisited(newVisitedCountry);
        console.log(country);
    }

    return (
        <div>
            <h1>
                Country Tour : {countries.length}
            </h1>

            <h3>Country Visited :  {markVisited.length}  </h3>

{
    markVisited.map(mark => <li key={mark} mark={mark}> {mark.name.common}  </li>)
}

            <div>
                {
                    countries.map(country => <Country handleMarkVisited={handleMarkVisited} key={country} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;