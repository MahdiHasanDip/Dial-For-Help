import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../../Firebase/Firebase.init'
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";


// firebase init 
initializeAuthentication();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin,setAdmin] = useState(false);


const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth();


// google sign in 
const signInWithGoogle = (location,navigate)=>{ 
  setIsLoading(false)
        signInWithPopup(auth, GoogleProvider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;    
        const user = result.user;  
        saveUser(user.email, user.displayName, "PUT")
        const destination = location?.state?.from || '/';
        navigate(destination);



        }).catch((error) => {    
        const errorCode = error.code;
        const errorMessage = error.message; 
        })
        .finally(() => setIsLoading(true));
}

// Auth Observer
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser(user);
  
        const uid = user.uid; 
      }
      else{
        setUser({});
      }
      setIsLoading(false);
    });
  
  },[])

//   logout 
const logOut =() =>{
  setIsLoading(true);
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(() => setIsLoading(false));
}

// registration 
const registration = (email, password,navigate) =>{
  setIsLoading(false)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {    
    const user = userCredential.user;
    saveUser(user.email, user.displayName, "POST")
    navigate('/');
  })
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;   
  })
  .finally(() => setIsLoading(true));
}

// Log in 

const login = (email, password,location,navigate) =>{
  setIsLoading(false)
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/';
    navigate(destination);
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
  .finally(() => setIsLoading(true));
}

// user post to db 
const saveUser = (email,displayName , method)=>{
  const user = {email, displayName};
  fetch('https://intense-crag-69313.herokuapp.com/users',{
              method: method,
              headers:{
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)              
                           
          })
};

// load admin 
useEffect(()=>{
  fetch(`https://intense-crag-69313.herokuapp.com/users/${user.email}`)
  .then(res => res.json())
  .then(data => setAdmin(data.admin))
},[user.email])


    return (
        {
            user,
            signInWithGoogle,
            logOut,
            registration,
            login,
            admin,
            isLoading
        }
    );
};

export default UseFirebase;