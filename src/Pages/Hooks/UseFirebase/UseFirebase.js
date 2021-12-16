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
const signInWithGoogle = ()=>{ 
        signInWithPopup(auth, GoogleProvider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;    
        const user = result.user;  
        saveUser(user.email, user.displayName, "PUT")



        }).catch((error) => {    
        const errorCode = error.code;
        const errorMessage = error.message; 
        });
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
    //   setIsLoading(false);
    });
  
  },[])

//   logout 
const logOut =() =>{
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
}

// registration 
const registration = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {    
    const user = userCredential.user;
    saveUser(user.email, user.displayName, "POST")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;   
  });
}

// Log in 

const login = (email, password) =>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

// user post to db 
const saveUser = (email,displayName , method)=>{
  const user = {email, displayName};
  fetch('http://localhost:5000/users',{
              method: method,
              headers:{
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)              
                           
          })
};

// load admin 
useEffect(()=>{
  fetch(`http://localhost:5000/users/${user.email}`)
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
            admin
        }
    );
};

export default UseFirebase;