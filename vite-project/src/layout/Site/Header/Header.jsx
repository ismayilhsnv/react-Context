import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MainContext from '../../../context';

const Header = () => {
  const { searchData,homeCounter} = useContext(MainContext);

  return (
    <div className='um'>
    
    <div className='header__div'>
      <img
        className='img'
        src="https://media1.thehungryjpeg.com/thumbs2/ori_3659063_3se1lci0rezmcq2d23js4j69gbiswkvrgnltiphk_monogram-is-logo-design.jpg"
        alt=""
      />
      <ul className='header__ul'>
        <li>
          <Link style={{ color: 'black', textDecoration: 'none' }} to='/'>
            Home
          </Link>
          <div className="dropdown-content">
          <div className='di'>

             <div>

              <ul>
            <li>Home Default</li>
            <li>Home Best Selling</li>
            <li>Home Instagram</li>
            <li>Home Instagram</li>
            <li>Home Classic</li>
            <li>Home Left Sidebar</li>

            </ul> 
             </div>
             
            <div>

               <ul>
            <li>Home Modern</li>
            <li>Home Full Width</li>
            <li>Home Parallax</li>
            <li>Home Minimal</li>
            <li>Home Simple</li>
            <li>Home Masonry</li>




            </ul>
            </div>
           
          </div>
         
            
          </div>
        </li>
        <li>
          <Link style={{ color: 'black', textDecoration: 'none' }} to='/Favorites'>
            Favorites
          </Link>
          <div className="dropdown-content">
          <div className='di'>

             <div>

              <ul>
            <li>Home Default</li>
            <li>Home Best Selling</li>
            <li>Home Instagram</li>
            <li>Home Instagram</li>
            <li>Home Classic</li>
            <li>Home Left Sidebar</li>

            </ul> 
             </div>
             
            <div>

               <ul>
            <li>Home Modern</li>
            <li>Home Full Width</li>
            <li>Home Parallax</li>
            <li>Home Minimal</li>
            <li>Home Simple</li>
            <li>Home Masonry</li>




            </ul>
            </div>
           
          </div>
         
            
          </div>
        </li>
        <li className="dropdown">
          Pages
          <div className="dropdown-content">
          <div className='di'>

             <div>

              <ul>
            <li>Home Default</li>
            <li>Home Best Selling</li>
            <li>Home Instagram</li>
            <li>Home Instagram</li>
            <li>Home Classic</li>
            <li>Home Left Sidebar</li>

            </ul> 
             </div>
             
            <div>

               <ul>
            <li>Home Modern</li>
            <li>Home Full Width</li>
            <li>Home Parallax</li>
            <li>Home Minimal</li>
            <li>Home Simple</li>
            <li>Home Masonry</li>




            </ul>
            </div>
           
          </div>
         
            
          </div>
        </li>
        <li>Blog
        <div className="dropdown-content">
          <div className='di'>

             <div>

              <ul>
            <li>Home Default</li>
            <li>Home Best Selling</li>
            <li>Home Instagram</li>
            <li>Home Instagram</li>
            <li>Home Classic</li>
            <li>Home Left Sidebar</li>

            </ul> 
             </div>
             
            <div>

               <ul>
            <li>Home Modern</li>
            <li>Home Full Width</li>
            <li>Home Parallax</li>
            <li>Home Minimal</li>
            <li>Home Simple</li>
            <li>Home Masonry</li>




            </ul>
            </div>
           
          </div>
         
            
          </div>
        </li>
        <li>Contact
        <div className="dropdown-content">
          <div className='di'>

             <div>

              <ul>
            <li>Home Default</li>
            <li>Home Best Selling</li>
            <li>Home Instagram</li>
            <li>Home Instagram</li>
            <li>Home Classic</li>
            <li>Home Left Sidebar</li>

            </ul> 
             </div>
             
            <div>

               <ul>
            <li>Home Modern</li>
            <li>Home Full Width</li>
            <li>Home Parallax</li>
            <li>Home Minimal</li>
            <li>Home Simple</li>
            <li>Home Masonry</li>




            </ul>
            </div>
           
          </div>
         
            
          </div>
        </li>
        <li style={{ position:'relative' }}>
          <Link style={{ color: 'orangered', textDecoration: 'none' }} to='/Basket'><i className="fa-solid fa-basket-shopping"></i></Link>
        </li>
        <p style={{ color:'rgb(236, 88, 0)',position:'absolute',right:'41.2%'}}>{homeCounter}</p>
       
      </ul>
      <input className='header_div_inp' type="text" placeholder=' Search' onChange={(e) => searchData(e.target.value)} />
   
  
   
      
   
   
    </div>
    <div className='ad'>
    <p>Special Price</p>
    <h1>Neylond Brend <br />
    Jacket</h1>
    <p>Casual Line</p>
    <p>Nylon mix fabric</p>
    <p>Waterproof fabric</p>
    <a href="">Discover More</a>

   </div>

    
    </div>
    

  );
};

export default Header;