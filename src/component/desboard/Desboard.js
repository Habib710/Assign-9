
import React from 'react';
import AreaCharts from './Bar-Chart/BarChart';

import CoustomPie from './Pie-chart/CoustomPie';
import './desboard.css';
import Bar from './Bar-Chart/Bar';
import './desboard.css'

;

const Desboard = () => {
    
    return (
        <div className='hidens'>
        
            
       
      <div className='row cos-css' >
          <div className='col-5 m-3 '>
              <h3 className='py-4 my-2'>Pie Chart of Data</h3>
          <CoustomPie></CoustomPie>
          </div>
          <div className='col-5 m-3'>
          <h3 className='py-4 my-2'>AreaChart of Data</h3>
              <AreaCharts></AreaCharts>
          
          </div>
      </div>
      <div className='row cos-css' >
          <div className='col-5   m-3'>
              <h3 className='py-4 my-2'>ComposedChartsof Data</h3>
          <Bar></Bar>
          </div>
          
         </div>
      </div>
       
    );
};

export default Desboard;