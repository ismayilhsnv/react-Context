import SiteRoot from "../pages/Site/SiteRoot";
import Home from '../pages/Site/Home/Home';
import Favorites from "../pages/Site/Favorites/Favorites";
import Detail from '../pages/Site/Detail/Detail'
const Router=[{
    path:'/',
    element:<SiteRoot/>,
    children:[{
        path: '',
        element: <Home />
    },
    {
        path:'Favorites',
        element: <Favorites/>
    },
    {
        path:'/:id',
        element:<Detail/>
    }

]
}]
export default Router