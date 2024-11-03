import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {

    const [countries,setCountry] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])

    return (
        <div>
            <h1>
                Country Tour : {countries.length}
            </h1>
            <div>
                {
                    countries.map(country => <Country key={country} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;