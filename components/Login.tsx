'use client'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import "../styles/Login.css"
import { FirebaseContext } from "@/components/Firebase";

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
    const {user, setUser} = useContext(FirebaseContext)
    const [loading, setLoading] = useState(true)
    const [signedIn, setSignedIn] = useState(false)

    function signOut() {
        const auth = getAuth();
        auth.signOut().then(() => {
            setUser({})
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
        <div className="login-container">
        {!user?.uid ?
         <button className="profilebtn" onClick={() => SignIn()}>Sign In</button>
         : 
         <>
         <h1 className="profiletext">Welcome {user.displayName}</h1>
         <div className="img-container">
         <button className="profilebtn" onClick={() => signOut()}>Sign Out</button>
            <img className="profileimg" src={user.photoURL} alt={user.displayName}/>
            </div>
            <p className="profiletext">Email: {user.email}</p>
            </>
        }
        </div>
        </>
    )
}