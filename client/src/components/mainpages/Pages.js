import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
// import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'
import {GlobalState} from '../../GlobalState'
// import DetailsProduct from './utils/productItem/DetailsProduct'
import SingleCategory from '../subcom/SingleCategory'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Products} />
            {/* // temp remove this route for detailsPrdouct modal 
            <Route path="/detail/:id" exact component={DetailsProduct}/> */}
            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />
            <Route path="/category" exact component={isAdmin ? Categories :  NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct :  NotFound}/>
            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

            <Route path="/cart" exact component={Cart} />
            <Route path="/category/:id" exact component={SingleCategory} />


            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
