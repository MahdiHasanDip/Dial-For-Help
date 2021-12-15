import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../../Firebase/Firebase.init'
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword  } from "firebase/auth";


// firebase init 
initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser]= useState({});


const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth();


// google sign in 
const signInWithGoogle = ()=>{ 
        signInWithPopup(auth, GoogleProvider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;    
        const user = result.user;   


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
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}



    return (
        {
            user,
            signInWithGoogle,
            logOut,
            registration
        }
    );
};

export default UseFirebase;