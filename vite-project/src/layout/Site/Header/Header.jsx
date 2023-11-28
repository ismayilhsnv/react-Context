import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import MainContext from '../../../context'
const Header = () => {
  const {searchData}=useContext(MainContext)
  return (
    <div className='header__div'>
      <img className='img' src="https://media1.thehungryjpeg.com/thumbs2/ori_3659063_3se1lci0rezmcq2d23js4j69gbiswkvrgnltiphk_monogram-is-logo-design.jpg" alt="" />
      <ul className='header__ul'> 
        <li>
          <Link style={{color:'black', textDecoration:'none'}}  to='/'>Home</Link>
        </li>
        <li>
          <Link style={{color:'black', textDecoration:'none'}}  to='/Favorites'>Favorites</Link>
        </li>
      </ul>
      <input className='header__div__inp' type="text" placeholder=' Search'  onChange={(e)=>searchData(e.target.value)}/>
    </div>
  )
}

export default Header