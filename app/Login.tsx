'use client'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

export default function Login() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [signedIn, setSignedIn] = useState(false)

    function signOut() {
        const auth = getAuth();
        auth.signOut().then(() => {
            setUser(null)
            setSignedIn(false)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
        });
    }

    function SignIn () {
        var auth = getAuth();
        const provider = new GoogleAuthProvider()
    
    
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setUser(user)
            setLoading(true)
            setSignedIn(true)
            console.log(user)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(error)
        });
        
    }

    return (
        <>
        {!signedIn ?
         <button onClick={() => SignIn()}>Sign In</button>
         : 
         <>
         <h1>Welcome {user.displayName}</h1>
            <img src={user.photoURL} alt={user.displayName}/>
            <p>Email: {user.email}</p>
         <button onClick={() => signOut()}>Sign Out</button>
            </>
        }
        </>
    )
}