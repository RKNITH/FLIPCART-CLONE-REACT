import { Box, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import CartPage from './Components/Cart/CartPage';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/navbar';
import Products from './Components/Products.jsx/Products';
import Viewpage from './Components/ProductsView.jsx/Viewpage';

function App() {
  // const location =useLocation();
  // const [checkOtpPage, setCheckOtpPage] = useState(false);
  // useEffect(()=>{
  //   if(location.pathname==='/otp'){
  //     setCheckOtpPage(true)
  //     console.log(location.pathname, " loaction ");
  //   }
  // },[])
  // console.log(location.pathname, " out from if loaction ");
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
  // console.log(checkOtpPage, " checkOtpPage ");
  return (
    <Box>
      {/* {
        checkOtpPage? "":<Navbar/>
      }
       */}
      <Navbar/>
      <AllRoutes/>
      {/* <Home/> */}
      {/* <Products/> */}
      {/* <Viewpage/> */}
      {/* <CartPage/> */}
      {/* {
        isLargerThan720? <Footer/> : ""
      } */}
      {/* {
        checkOtpPage?"":
      } */}
      <Footer/>
    </Box>
  );
}

export default App;
