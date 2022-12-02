import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
const [menuitems,setmenuitems]=useState(items);
const [categories ,setcategories]=useState([]);

const filteritems =(category)=>{
if (category ==='all'){
  setmenuitems(items);
  return;
}

  const newitems=items.filter((item)=>item.category===category);
  setmenuitems(newitems);


}
  return (
    <main>
<section className='menu section'>
<div className='title'>
<h2>  namma Kai Ruchi </h2>
<div className='underline'></div>
</div>

<Categories filteritems={filteritems}/>
<Menu items={menuitems}/>



</section>


    </main>




  )



}

export default App;
