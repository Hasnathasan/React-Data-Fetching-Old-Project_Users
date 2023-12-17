import React from 'react';
import Address from '../Address/Address';
import './User.css'


const User = (props) => {
    const {name, username, email, address} = props.user;
    
    return (
        <div className="user">
            <h2>Name: {name}</h2>
            <h4>User-Name: {username}</h4>
            <h4>Email: {email}</h4>
            <Address address={address}></Address>
        </div>
    );
};
const User4 = () => {
    return <h1>Hello from User4</h1>
}

export {User, User4};