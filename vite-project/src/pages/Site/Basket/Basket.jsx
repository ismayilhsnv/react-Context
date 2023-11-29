import React, { useContext } from 'react'
import MainContext from '../../../context'

const Basket = () => {
    const {basket, handleIncrease,handleDecrease}=useContext(MainContext)
  return (
    <div>
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    
      {
        basket.map((item,index)=>{
            return(
                <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.price}</td>  
                    <td><button onClick={()=>handleDecrease(item)}>-</button></td>                  
                    <td>{item.count}</td>
                    <td><button onClick={()=>handleIncrease(item)}>+</button></td>
                    <td>{item.totalPrice}</td>
                </tr>
            )
        })
      }
    
  </tbody>
</table>
    </div>
  )
}

export default Basket
