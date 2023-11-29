import React, { useContext } from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import MainContext from '../../../context';

const Card = ({ item }) => {
  const{addToFavorites}=useContext(MainContext)
  return (
    <>
    <a href={`/${item.id}`}>

<div className="card">
<img className="card-img-top" src={item.thumbnail} alt={item.title} />
<div className="overlay">
  <p>Add to Favorites</p>
  <Link onClick={(e) => { addToFavorites(item.id) }}>&#10084;</Link>
</div>
<div className="card-body card-bodyy">
  <h5 className="card-title">{item.title}</h5>
  <p className="card-text">{item.price} $</p>
  <p className="card-text">{item.brand}</p>
</div>
</div>

</a>
    

    
    
    </>

   

  );
}

export default Card;