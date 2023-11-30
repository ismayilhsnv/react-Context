import { useEffect, useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter, json } from 'react-router-dom';
import Router from './routes/Routes';
import MainContext from './context';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const router = createBrowserRouter(Router);

function App() {
  const [data, setData] = useState([]);
  const [filteredData,setFilteredData]=useState([])
  const [basket, setBasket]=useState(localStorage.getItem('basket')?JSON.parse(localStorage.getItem('basket')):[])
  const [homeCounter,setHomeCounter]=useState(localStorage.getItem("counter")? Math.max(0,parseInt(localStorage.getItem("counter"))):0)
 
  const[totalPrice,setTotalPrice]=useState(0)
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
  
      toast.success(' Fovoritesə əlavə olundu');
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Səbətinizdə mövcuddur',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  
  const addBasket=(item)=>{
    const target=basket.find(product=>product.id==item.id)
    if(!target){
      let newItem={... item, count:1,totalPrice:item.price}
      setBasket([...basket,newItem])
      setHomeCounter(homeCounter+1)
      localStorage.setItem('basket',JSON.stringify([...basket,newItem]))
      
      localStorage.setItem("counter",homeCounter+1)
      toast.success('Basketə əlavə olundu');
    }
    else{
      setHomeCounter(homeCounter+1)
      localStorage.setItem("counter",homeCounter+1)
      const newData={...item, count:target.count +1,totalPrice:item.price * (target.count+1)}
      setBasket([...basket.filter(element=>element.id !=item.id),newData])
      localStorage.setItem('basket', JSON.stringify([...basket.filter(element=>element.id != item.id),newData]))
      toast.success('Basketə əlavə olundu');
    }
  }
  
  const handleIncrease=(item)=>{
    let updatedata=[...basket]
    let target=updatedata.find(prod=>prod.id==item.id)
    setHomeCounter(homeCounter+1)
    localStorage.setItem("counter",homeCounter+1)
    target.count+=1
    target.totalPrice=item.price * target.count
      
    setBasket(updatedata)
    localStorage.setItem("basket",JSON.stringify(updatedata))

}


const handleDecrease = (item) => {
  let updatedata = [...basket];
  let target = updatedata.find((prod) => prod.id === item.id);

  if (target.count > 1) {
    setHomeCounter(homeCounter - 1);
    localStorage.setItem("counter", homeCounter - 1);
    target.count -= 1;
    target.totalPrice = item.price * target.count;
    setBasket(updatedata);
    localStorage.setItem("basket", JSON.stringify(updatedata));
  }
   else {
    setHomeCounter(homeCounter - 1);
    localStorage.setItem("counter", homeCounter - 1);
    updatedata = updatedata.filter((prod) => prod.id !== item.id);
    setBasket(updatedata);
    localStorage.setItem("basket", JSON.stringify(updatedata));
  }
};


  const searchData = (searchValue) => {
    setFilteredData([...data.filter((item) => item.title.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
  }

  const datas = { data, setData,searchData,filteredData,addToFavorites ,addBasket,basket,setBasket,homeCounter,handleIncrease,setHomeCounter,handleDecrease };

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