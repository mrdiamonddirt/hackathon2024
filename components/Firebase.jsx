"use client"

import { createContext, useEffect, useState } from "react";
import useFirebase from "../hooks/use-firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { initializeApp } from "firebase/app";
export const FirebaseContext = createContext({user: null, setUser: (user) => {}});

export default function Firebase({children})
{
    const {app} = useFirebase()
    const [user, setUser] = useState(null)

    useEffect (() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (userCreds) => {
            console.log("UserCreds: ", userCreds)
            if (userCreds) {
                setUser(userCreds)
            }
        });
    }, [app])

    return (<>
    <FirebaseContext.Provider value={{user, setUser}}>
        {children}
    </FirebaseContext.Provider>
    </>)
}