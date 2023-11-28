import SiteRoot from "../pages/Site/SiteRoot";
import Home from '../pages/Site/Home/Home';
import Favorites from "../pages/Site/Favorites/Favorites";
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
    }
]
}]
export default Router