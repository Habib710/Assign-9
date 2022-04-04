
import React, { useEffect, useState } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';


const ComposedCharts = () => {
    const [data ,setdata] =useState([]);
    useEffect(()=>{
       

      fetch("new.json")
      .then(res=>res.json())
      .then(data=>setdata(data))


  },[]);
    return (
        <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="sell" stroke="#ff7300" />
      </ComposedChart>
        
    );
};

export default ComposedCharts;