import React from 'react';

const Address = (props) => {
    const {city, street, zipcode} = props.address;
    return (
        <div>
            <h3>Address : {city}, {street}, {zipcode}</h3>
        </div>
    );
};

export default Address;