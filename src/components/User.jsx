import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

function User() {
    const [Inpval , setInpval] = useState("")
    const {toggleAuth} = useContext(AuthContext)
  return (
    <Box p={10} mt="70px">

    <FormControl isRequired >
    <FormLabel>Name</FormLabel>
    <Input onChange={(e)=>{
       setInpval(e.target.value)
    }} placeholder='Enter Your Name' />
    <Input type="submit" onClick={()=>{
        toggleAuth(Inpval)
        console.log(Inpval)
    }}/>
  </FormControl>
    </Box>
  )
}

export default User