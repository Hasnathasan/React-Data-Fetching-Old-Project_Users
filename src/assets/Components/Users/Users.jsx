import React, { useEffect, useState } from 'react';
import {User} from '../User/User';
import { removeItem, setItem } from '../Utilities/Utilities';
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    },[]);
    const addItem = name =>{
        setItem(name)
    }
    return (
        <div className="userContainer">
            {
                users.map(user => 
                    <div key={user.id}>
                        <User user={user}></User>
                        <button onClick={() => addItem(user.name)}>Add Item</button>
                        <button onClick={() => removeItem(user.name)}>Remove Item</button>
                    </div>
                
                )
            }
        </div>
    );
};

export default Users;