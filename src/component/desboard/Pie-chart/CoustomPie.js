import React, { useEffect, useState } from 'react';
import { Pie, PieChart } from 'recharts';

const CoustomPie = () => {
    const [data ,setdata] =useState([]);
    useEffect(()=>{
       

      fetch("new.json")
      .then(res=>res.json())
      .then(data=>setdata(data))


  },[])
       
     
    return (
        <PieChart width={730} height={250}>
        <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={data} dataKey="investment" nameKey="sell" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
      </PieChart>
    );
};

export default  CoustomPie;