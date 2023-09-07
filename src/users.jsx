import { useEffect, useState } from "react"
import User from './user'

export default function Users(){
    const [users,setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setUser(data))
    },[])
     
    return(
        <div>
            <h3>Users: {users.length}</h3>
            {
                users.map(friend => <User firend={friend}></User>)
            }
        </div>
    )
}