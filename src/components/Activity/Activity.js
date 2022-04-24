import React from 'react';
import './Activity.css';

const Activity = ({ activity }) => {
    const { name, img } = activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Activity;