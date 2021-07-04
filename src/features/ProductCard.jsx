import { Box, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { useCart } from '../providers/CartProvider';
import { ADD_TO_CART } from '../reducers/cart-reducer';
import { getDiscountedPrice } from '../utils';

function ProductCard({ product }) {
  const { cartDispatch } = useCart();

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={`https://picsum.photos/400?random=${product.id}`}
        alt={product.name}
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {product.brand}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.name}
        </Box>

        <Box>
          <Text display="inline" fontSize="xl" fontWeight="bold">
            {getDiscountedPrice(product.price, product.discount)}
          </Text>
          &nbsp;
          <Text textDecoration="line-through" display="inline">
            {product.price}
          </Text>
          <Text display="inline" color="green.600" fontSize="md">
            &nbsp;{product.discount}%
          </Text>
        </Box>
        <Button
          mt={2}
          colorScheme="blue"
          onClick={() => {
            cartDispatch({
              type: ADD_TO_CART,
              payload: { ...product, quantity: 1 },
            });
          }}
        >
          Add To Cart
        </Button>
      </Box>
    </Box>
  );
}

export default ProductCard;
