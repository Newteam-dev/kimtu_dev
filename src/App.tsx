
import { useRoutes } from 'react-router-dom'
import ClientLayout from './layout/client'
import AdminLayout from './layout/admin'
import Home from './components/client/home'
import ProductList from './components/admin/productlist'
import ProductAdd from './components/admin/productadd'
import Login from './components/client/user/login'
import ListCart from './components/client/carts/listcart'
import CheckOut from './components/client/carts/checkout'
import Register from './components/client/user/Register'
import ProductEdit from './components/admin/productedit'


const App = () => {
  const routes = useRoutes([
      {path:"/",element:<ClientLayout/>,children:[
        {path:"",element:<Home/>},
        {path:"cart",element:<ListCart/>},
        {path:"checkout",element:<CheckOut/>},
        {path:"login",element:<Login/>},
        {path:"register",element:<Register/>}
      ]},
      {path:"/dashboard",element:<AdminLayout/>,children:[
          {path:"product-list",element:<ProductList/>},
          {path:"product-add",element:<ProductAdd/>},
          {path:"product-edit/:id",element:<ProductEdit/>}
      ]},
  ])
  return routes
}

export default App