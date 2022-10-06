import { Badge, Box, Text } from '@chakra-ui/react'
import React from 'react'

function Message(props) {
  return (
    <Box p={6} w="100%" height="auto" display="flex" justifyContent={!props.sender?"flex-start":"flex-end"}>
      <Box maxW="80%" p="10px" ml='1' bg={props.name?(props.sender?"#68D391":"#C6F6D5"):"#E53E3E"}
       borderRadius={!props.sender?"20px 20px 20px 0px":"20px 20px 0px 20px"} 
       >
        <Box w="100%" display="flex" justifyContent={!props.sender?"flex-start":"flex-end"}>
        { props.name? <Badge bg="transparent" colorScheme='green'>
  {props.name}
  </Badge>:""}
        </Box>
      <Text textTransform={props.name?"none":"uppercase"}>
        {props.msg}
        </Text>
         </Box>
        </Box>
       
  )
}

export default Message