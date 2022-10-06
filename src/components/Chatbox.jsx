import React, { useContext } from 'react'
import {Badge, Box, Button, Center, Container, Divider, Input, InputGroup, InputRightAddon, Stack} from '@chakra-ui/react'
import { BiSend } from 'react-icons/bi'
import { useState } from 'react'
import Message from './Message'
import {useEffect} from "react"
import {io} from "socket.io-client"
import { useRef } from 'react'
import { AuthContext } from '../context/AuthContextProvider'


const socket = io("https://chatapp-api.onrender.com");

function Chatbox() {
  const {Auth,toggleUser,addUser,removeUser} = useContext(AuthContext)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)
  const [ Messages , setMessage] = useState([])
  const recieveaudio = new Audio('/notification/recieve.mp3')
  const sendaudio = new Audio('/notification/send.wav')
  const addedaudio = new Audio('/notification/added.mp3')
  const handlemsg = (x)=>{
    setMessage([...Messages,x])
    if(!x.name){
      addedaudio.play()
    }
    else if(x.sender){
      sendaudio.play()
    }else{
      recieveaudio.play()
    }
    inputRef.current.value = null
    scrollRef.current?.scrollIntoView({behavior: 'smooth'});
  }
  const [Msginp , setMsginp] = useState({
    msg : "",
    sender : true,
    name : "you"
  })
  
  const sendMsg = ()=>{
    socket.emit('send',Msginp.msg)
    
    handlemsg(Msginp)
  }
  useEffect(()=>{
  
    
    socket.emit("new-user-connected", Auth)
    
  },[])
  socket.on("user-joined", data =>{
    handlemsg({msg:`${data} Joined the chat`,sender : false})
    addUser(data)
    console.log(data)
  })
  socket.on('recieve', data =>{
    console.log(data)
    let obj ={msg:data.message,sender : false,name:data.name}
    handlemsg(obj)
  })
 
  socket.on('left',name=>{
    handlemsg({msg:`${name} left the chat`,sender : false})
   removeUser(name)
    console.log(name,"left")
  })
  

    socket.on('userList',data=>{
     toggleUser(data)
    })
  
  
  console.log("Messages",Messages)
  return (
 <>
    <Box m="auto" mt="70px" backgroundImage={`url("/images/background1.jpg")`} overflowY="scroll" w="100%" h="87vh"  className='chatbox'>
     {
      Messages.map((el)=>{
       return <Message  {...el} />
      })
     } 
     <Box mt="100px" w="100%" ref={scrollRef}></Box>
    </Box>

 <Center>
  <InputGroup w="100%"  position="fixed" bottom="0px">
  <Input variant='filled' ref={inputRef} onChange={(e)=>{
    setMsginp({...Msginp,msg:e.target.value})
    console.log(Msginp)
  }} 
  onKeyPress={(e)=>{
    if(e.code === "Enter"){
       sendMsg()
    } 
     console.log(e)
  }}
  w="95%" placeholder='Flushed' />
  <InputRightAddon>
  <Button  onClick={sendMsg}>

  <BiSend/>
  </Button>
  </InputRightAddon>
  </InputGroup>
 </Center>
 
    </>
  )
}

export default Chatbox