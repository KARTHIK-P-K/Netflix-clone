import React , {createContext,useContext,useState,useEffect} from "react"
import { auth,db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { setDoc,doc } from "firebase/firestore";


const AuthContext= createContext()

export function AuthContextProvider({children}){

  const [user,setUser] = useState({})

  function logOut(){
    return signOut(auth)
  }

  function logIn(email,password){
    return signInWithEmailAndPassword(auth,email,password)
  }
  function signUp(email,password){
     createUserWithEmailAndPassword(auth,email,password)
     setDoc(doc(db,'users',email),{
      savedShows:[]

     }
     )
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth ,(currentUser)=>{
      setUser(currentUser)
    } )
    return ()=>{
      unsubscribe()
    }
  })

    return(
      <AuthContext.Provider  value={{logIn,logOut,signUp,user}}  >
          {children}
      </AuthContext.Provider>
)}

export function UserAuth(){
  return useContext(AuthContext)
}

