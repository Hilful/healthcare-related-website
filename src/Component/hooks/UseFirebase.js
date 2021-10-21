// using firebase 
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../LoginFrom/Firebase/firebase.init';
initializeAuthentication();

const useFirebase =() => {
    const [users,setUsers] =useState({});
    const auth = getAuth();

    const singaIngoogle =( ) =>{
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
        

    }
    //observe user state change
    useEffect (()=>{
      const unsubscribed=  onAuthStateChanged(auth,user =>{
            if (user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
        });
        return () =>unsubscribed;
    }, [ ] )

    const logOut =() =>{
        signOut(auth)
        .then(()=>{
            setUsers({})
        });
    }
    return{
        users,
        singaIngoogle,
        logOut
    }
}
export default useFirebase;