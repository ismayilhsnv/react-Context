import { useEffect, useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Router from './routes/Routes';
import MainContext from './context';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const router = createBrowserRouter(Router);

function App() {
  const [data, setData] = useState([]);
  const [filteredData,setFilteredData]=useState([])
  const [favorites, setFavorites] = useState(
    localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : []
  );


  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      setFilteredData(res.data.products)
      setData(res.data.products);
    });
  }, []);




  const addToFavorites = (id) => {
    let item = data.find((item) => item.id === id);
  
    const storedFavorites = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : [];
  
    if (!storedFavorites.find((favItem) => favItem.id === id)) {
      const updatedFavorites = [...storedFavorites, item];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  
      toast.success('Əlavə olundu');
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Səbətinizdə mövcuddur',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  

  const searchData = (searchValue) => {
    setFilteredData([...data.filter((item) => item.title.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
  }

  const datas = { data, setData,searchData,filteredData,addToFavorites };

  return (
    <>

 <MainContext.Provider value={datas}>
      <RouterProvider router={router} />
    </MainContext.Provider>
    <Toaster />

    </>
   
  );
}

export default App;

