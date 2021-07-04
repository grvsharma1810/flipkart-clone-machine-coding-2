import React from 'react';
import { Flex, Spacer, Text } from '@chakra-ui/react';
import { useCart } from '../providers/CartProvider';
import { getDiscountedPrice } from '../utils';

function getGrandTotal(cart) {
  return cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
}

function getGrandTotalWithDiscount(cart) {
  return cart.reduce(
    (acc, curr) =>
      acc + getDiscountedPrice(curr.price, curr.discount) * curr.quantity,
    0
  );
}

function CartPrice() {
  const {
    cartState: { cart },
  } = useCart();

  return (
    <div>
      <Flex>
        <Text display="inline">Grand Total</Text>
        <Spacer />
        <Text display="inline">{getGrandTotal(cart)}</Text>
      </Flex>
      <Flex>
        <Text display="inline">Discount</Text>
        <Spacer />
        <Text display="inline">
          {getGrandTotal(cart) - getGrandTotalWithDiscount(cart)}
        </Text>
      </Flex>
      <Flex>
        <Text display="inline">Total</Text>
        <Spacer />
        <Text display="inline">{getGrandTotalWithDiscount(cart)}</Text>
      </Flex>
    </div>
  );
}

export default CartPrice;
