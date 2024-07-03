import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './Components/Context/CartContext';
import AuthContextProvider from './Components/Context/Authcontext';
import { store } from './Redux/store';
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
  <AuthContextProvider>
  <CartContextProvider>
  <ChakraProvider 
  // theme={customTheme}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
  </CartContextProvider>
  </AuthContextProvider>
  </Provider>

);
