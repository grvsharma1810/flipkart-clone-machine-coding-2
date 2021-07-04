import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './features/Navbar';
import ProductListingPage from './features/ProductListingPage';
import { Routes, Route } from 'react-router-dom';
import CartPage from './features/CartPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

    </ChakraProvider>
  );
}

export default App;
