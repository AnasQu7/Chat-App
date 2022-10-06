import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react';
import { useContext } from 'react';
import { GiMagicHat } from 'react-icons/gi';
import { AuthContext } from '../context/AuthContextProvider';
import Profile from './Profile';

function Navbar() {
    const {Auth} = useContext(AuthContext)
  return (
   <Box position="fixed" top="0px" right="0px"  left="0px" w="100%">
    <Flex h="70px" bg="teal" justifyContent="space-between" px={5} w="100%">
       <Box display="flex" alignItems="center">
        <GiMagicHat size={60}/>
        <Text fontFamily="cursive" fontSize={20}>Chat Hat</Text>
       </Box>
       <Box display="flex" alignItems="center">
         {Auth?<Profile/>:
         ""}
        </Box>
    </Flex>
   </Box>
  )
}

export default Navbar