import { useState } from "react"
import { createContext } from "react"


export const AuthContext = createContext()


export default function AuthContextProvider({children}) {
    const [Auth , setAuth] = useState(false)
    const [User , setUser] = useState([])
    const toggleAuth = (x)=>{
         setAuth(x)
    }
    const toggleUser = (x)=>{
       setUser(x)
    }
    const addUser = (x)=>{
       setUser([...User,x])
    }
    const removeUser = (x)=>{
      let temp = User.filter((el)=>{
        if(el!==x){
          return el
        }
        setUser(temp)
      })
       setUser(x)
    }
   
    console.log(User)
  return (
    <AuthContext.Provider value={{Auth,toggleAuth,toggleUser,User,addUser,removeUser}}>
        {children}
    </AuthContext.Provider>
  )
}

