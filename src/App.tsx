import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './CSS/styles.min.css';
import HomeView from './Views/HomeView';
import ContactView from './Views/ContactView';
import PageNotFound from './Views/PageNotFound';
import ProductView from './Views/ProductView';
import ProductViewSingle from './Views/ProductViewSingle';
import CategoriesView from './Views/CategoriesView';
import FavoritesView from './Views/FavoritesView';
import LogInView from './Views/LogInView';
import AdminView from './Views/AdminView';
import { ProductsProvider } from './Contexts/ProductsContext';
import CategoriesViewSingle from './Views/CategoriesViewSingle';
import ScrollToTop from './Utilities/ScrollToTop';
import Description from './SubRoutes/Desctiption';
import Additional from './SubRoutes/Additional';
import Returns from './SubRoutes/Returns';
import Review from './SubRoutes/Review';
import { CartProvider } from './Contexts/CartContext';
import CreateProduct from './SubRoutes/CreateProduct';
import ViewComments from './SubRoutes/ViewComments';
import ViewUsers from './SubRoutes/ViewUsers';
import UpdateProduct from './SubRoutes/UpdateProduct';
import Dashboard from './SubRoutes/Dashboard';


function App() {


  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
      {/* <ProductsProvider> */}
        <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/admin/' element={<AdminView />}>
              <Route path='' element={<Dashboard />}/>
              <Route path='create-product' element={<CreateProduct />} />
              <Route path='update-product' element={<UpdateProduct />} />
              <Route path='view-comments' element={<ViewComments />} />
              <Route path='view-users' element={<ViewUsers />} />
            </Route>
            <Route path='/contact' element={<ContactView />} />
            <Route path='/product/' element={<ProductView />} />
            <Route path='/product/:id' element={<ProductViewSingle />}>
              <Route index path='description' element={<Description />} />
              <Route path='additional' element={<Additional />} />
              <Route path='returns' element={<Returns />} />
              <Route path='review' element={<Review />} />
            </Route>
            <Route path='/categories' element={<CategoriesView />} />
            <Route path='/favorites' element={<FavoritesView />} />
            <Route path='/login' element={<LogInView />} />
            <Route path='/categories/:category' element={<CategoriesViewSingle />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
      {/* </ProductsProvider> */}
      </CartProvider>
    </Router>
  );
}

export default App;
