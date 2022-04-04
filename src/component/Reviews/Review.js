import React from 'react';
import useData from '../../hooks/useData';
import HomeReview from '../home-review/HomeReview';

const Review = () => {
    const [information, setinformation]=useData([])



    return (
        <div className='m-0 p-0'>
          
            <section className='bg-light py-5 my-0'>
              <h1 className='test'>Customer Reviews</h1>
              <div className='card-css my-4'>

              {
                information.map(info=><HomeReview key={info.id} data={info} ></HomeReview>)
              }
             
              </div>
              
            </section>

           
            
        </div>
    );
};

export default Review;