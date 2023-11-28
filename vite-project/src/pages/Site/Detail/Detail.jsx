import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import './Detail.css'
import MainContext from '../../../context'
import { Link } from 'react-router-dom'

const Detail = () => {
    const {addToFavorites} =useContext(MainContext)
    const { id } = useParams()
    const [detail, setDetails] = useState([])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then(res => {
            setDetails(res.data)
        })

    }, [])
    return (
        <div className='details'>

            <img
                className="card-img-top card"
                src={detail.thumbnail}
                alt="Card cap"
            /> <div className='content'>
                <p>{detail.id}</p>
                 <p>{detail.title}</p>
                  <p>{detail.price}</p>
                  <p>{detail.description}</p>
                  <Link onClick={(e) => {
          addToFavorites(detail.id)
        }} className="btn btn-primary link" >
          Go Favorites</Link>
                  </div>
        </div>
    )
}

export default Detail
