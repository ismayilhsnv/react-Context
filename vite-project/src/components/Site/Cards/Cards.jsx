
import React, { useContext } from 'react';
import Card from '../Card/Card';
import MainContext from '../../../context';
import './Cards.css'

const Cards = () => {
  const { filteredData } = useContext(MainContext);

  return (
    <div className='cards'>
      {filteredData.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
}

export default Cards;
