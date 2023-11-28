import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Favorites.css'


const Favotites = () => {
  
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );
  const deleteFavorites =(id)=>{
    let item = favorites.find(item=>item.id==id)
    favorites.splice(favorites.indexOf(item),1)
    setFavorites([...favorites])
    localStorage.setItem("favorites",JSON.stringify([...favorites]))
  }
  const handleDelete = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  return (
   
    <><br />
            <button style={{ marginBottom: '5px' , marginLeft:'90%', fontWeight:'700',}} className='btn btn-danger' onClick={handleDelete}>Clear All</button>
       <div className='favour'>
     
        {
          favorites.map((item,index)=>{
            return (
              <div key={index} className="card cardd" style={{ width: '18rem' }}>
              <img
                className="card-img-top"
                src={item.thumbnail}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price}</p>
                  <button onClick={()=>{
                    deleteFavorites(item.id)
                  }} className='btn btn-danger'>Delete</button>
              </div>
          
              
            </div>
    
            )
            
          })
        }
      </div>
    </>
  )
}

export default Favotites
