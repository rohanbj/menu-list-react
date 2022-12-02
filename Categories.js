import React from 'react';

const Categories = ({filteritems}) => {
  return (

    <div className='btn-container'>

<button className='filter-btn' onClick={()=> filteritems('breakfast')}>breakfast</button>
<button className='filter-btn' onClick={()=> filteritems('all')}>All</button>
<button className='filter-btn' onClick={()=> filteritems('shakes')}>shakes</button>
<button className='filter-btn' onClick={()=> filteritems('lunch')}>lunch</button>
    </div>
  )
};

export default Categories;
