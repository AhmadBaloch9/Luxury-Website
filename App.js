// ====== Import Custom Css =======//

 import './App.css';

// ========= Import React Router Dom =========//

import {Routes,Route} from 'react-router-dom';

// ====== Import Components =======//

import Navbar from './Components/Navbar';

import Footer from './Components/Footer';

// ======= Import Pages========//

import Home from './Pages/Home';

import Shop from './Pages/Shop';

import Blog from './Pages/Blog';

import About from './Pages/About';

import Contact from './Pages/Contact';

import Search from './Pages/Search';

import Wishlist from './Pages/WishList';

import Compare from './Pages/Compare';

import Cart from './Pages/Cart';

import { Productdetails } from './Pages/Productdetails';
const App = () => {
  return (
    <div>
            <header>
          <Navbar/>
          </header>
         <Routes>
           <Route path='/' element={<Home/>}>
               <Route path='productdetails' element={<Productdetails/>}/>
           </Route>
           <Route path='/shop' element={<Shop/>}/>
           <Route path='/blog' element={<Blog />}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/search' element={<Search/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/wishlist' element={<Wishlist/>}/>
           <Route path='/compare' element={<Compare/>}/>
           <Route path='/cart' element={<Cart/>}/>
         </Routes>
         <footer>
          <Footer/>
         </footer>
         </div>
  )
}

export default App