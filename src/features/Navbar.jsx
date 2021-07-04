import React from 'react';
import { Flex, Spacer, Text, Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <Flex p={2}>
      <Text fontWeight="extrabold" fontSize="2xl">
        Flipkart Clone
      </Text>
      <Spacer />
      <Button onClick={() => navigate('/cart')}>
        <FaCartPlus />
      </Button>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
}

export default Navbar;
