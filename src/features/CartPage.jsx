import React from 'react';
import { Box, Grid, Text, Button } from '@chakra-ui/react';
import { useCart } from '../providers/CartProvider';
import CartPrice from './CartPrice';
import { getDiscountedPrice } from '../utils';
import {
  ADD_TO_SAVED_FOR_LATER,
  INCREASE_PRODUCT_QUANTITY,
  REMOVE_FROM_CART,
  REMOVE_FROM_SAVED_FOR_LATER,
} from '../reducers/cart-reducer';

function CartPage() {
  const {
    cartState: { cart, savedForLater },
    cartDispatch,
  } = useCart();

  return (
    <Grid templateColumns="7fr 3fr" p={4}>
      <Box>
        <Text mb={4} fontSize="2xl" fontWeight="bold">Cart</Text>
        {cart.map(cartProduct => {
          return (
            <Box key={cartProduct.id} mb={2}>
              <Text fontWeight="bold" fontSize="2xl">
                {cartProduct.name}
              </Text>
              <Text mb={2}>
                Rs.&nbsp;
                {getDiscountedPrice(cartProduct.price, cartProduct.discount)}
              </Text>
              <span>Quantity: {cartProduct.quantity}&nbsp;&nbsp;</span>
              <Button
                size="sm"
                onClick={() =>
                  cartDispatch({
                    type: INCREASE_PRODUCT_QUANTITY,
                    payload: { productId: cartProduct.id },
                  })
                }
              >
                +
              </Button>
              <Button
                size="sm"
                ml={2}
                onClick={() => {
                  cartDispatch({
                    type: REMOVE_FROM_CART,
                    payload: { productId: cartProduct.id },
                  });
                  cartDispatch({
                    type: ADD_TO_SAVED_FOR_LATER,
                    payload: cartProduct,
                  });
                }}
              >
                Save For Later
              </Button>
              <Button
                size="sm"
                ml={2}
                onClick={() =>
                  cartDispatch({
                    type: REMOVE_FROM_CART,
                    payload: { productId: cartProduct.id },
                  })
                }
              >
                Remove
              </Button>
            </Box>
          );
        })}
      </Box>

      <CartPrice />
      <Box>
        <Text mb={4} fontSize="2xl" fontWeight="bold">Saved For Later</Text>
        {savedForLater.map(savedForLaterProduct => {
          return (
            <Box key={savedForLaterProduct.id} mb={2}>
              <Text fontWeight="bold" fontSize="2xl">
                {savedForLaterProduct.name}
              </Text>
              <Text mb={2}>
                Rs.&nbsp;
                {getDiscountedPrice(
                  savedForLaterProduct.price,
                  savedForLaterProduct.discount
                )}
              </Text>
              <span>Quantity: {savedForLaterProduct.quantity}&nbsp;&nbsp;</span>
              <Button size="sm" disabled>
                +
              </Button>
              <Button
                size="sm"
                ml={2}
                onClick={() =>
                  cartDispatch({
                    type: REMOVE_FROM_SAVED_FOR_LATER,
                    payload: { productId: savedForLaterProduct.id },
                  })
                }
              >
                Remove
              </Button>
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
}

export default CartPage;
