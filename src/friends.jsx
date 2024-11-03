import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends  (){

    const [users,setUser] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    return (
        <>
        <h3>
           Friends : {users.length}
        </h3>
        {
            users.map(user => <Friend key={user} user={user}></Friend>)
        }
        </>
    )
}