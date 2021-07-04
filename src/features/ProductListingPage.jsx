import * as productData from '../product-data.json';
import React from 'react';
import { Grid } from '@chakra-ui/react';
import ProductCard from './ProductCard';

function ProductListingPage() {
  const { ProductsData } = productData.default;
  console.log(ProductsData);
  return (
    <Grid templateColumns="repeat(4,1fr)" gridGap={2} p={4}>
      {ProductsData.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Grid>
  );
}

export default ProductListingPage;
