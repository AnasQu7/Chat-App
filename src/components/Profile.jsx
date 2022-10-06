import { Avatar, AvatarBadge, Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Input, Text, useDisclosure } from "@chakra-ui/react"
import { useContext, useRef } from "react"
import { AuthContext } from "../context/AuthContextProvider"

export default function Profile() {
    const {Auth,toggleAuth,User} = useContext(AuthContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    console.log("heheyehehe",User)
    return (
      <>
        <Avatar ref={btnRef} name={Auth} colorScheme='teal' onClick={onOpen}/>
       
       
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader textAlign="center"> 
            <Heading>Account</Heading></DrawerHeader>
  
            <DrawerBody>
                <Center>

                <Flex flexDirection="column" gap={2}>
              <Avatar size="lg" name={Auth}/>
              <Text textAlign="center" fontWeight="bold" textTransform="uppercase" >{Auth}</Text>
                </Flex>

                </Center>
                <Flex flexDirection="column">
                   <Heading my="20px">Users:</Heading>
                   {User?User.map((el)=>{
                    if(el!==Auth){
                       return <Box  m="auto" mb={5} border="1px solid grey" borderRadius={20} p={3} w="80%" alignItems="baseline" display="flex">
                        <Avatar size="sm" name={el}>
                        <AvatarBadge borderColor='papayawhip' bg='green.500' boxSize='1.15em' />
                        </Avatar>
                        <Text ml={5} fontWeight="bold" textTransform="capitalize">{el}</Text>
                       </Box>
                    }
                   }):"No Active Users!"}
                </Flex>
            </DrawerBody>
  
            <DrawerFooter>
              <Button colorScheme='teal' onClick={()=>{toggleAuth(false)}}>LEAVE CHAT</Button>
              <Button variant='outline' mr={3} onClick={onClose}>
                GO BACK
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }