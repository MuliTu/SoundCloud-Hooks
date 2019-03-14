import React, {useState, useEffect, useContext} from 'react';
import {TracksDispatch} from "../App";

const History = ({data}) => {

    useEffect(()=>{},[data]);

    return (
        <div className='container'>
            History
            <div>{data.map(x => <div>{x}</div>).slice(0,5)}</div>
        </div>
    );
};

export default History;
