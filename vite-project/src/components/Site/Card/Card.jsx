
import React, { useContext } from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import MainContext from '../../../context';

const Card = ({ item }) => {
  const{addToFavorites}=useContext(MainContext)
  return (
    <>
    <a href={`/${item.id}`}>

 <div  class="card">
  <img class="card-img-top" src={item.thumbnail}/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.price}</p>
    <p class="card-text">{item.brand}</p>
    <Link onClick={(e) => { addToFavorites(item.id) }} >
  &#10084; 
</Link>

  </div>
</div>


</a>
    

    
    
    </>

   

  );
}

export default Card;
