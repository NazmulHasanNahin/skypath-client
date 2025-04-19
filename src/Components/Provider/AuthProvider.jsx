import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();



const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //user create kora 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //google sign in
    const creategoogleUser = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    //user login with mail and pass
    const idsignin = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    //logout

    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user= ",currentUser);

            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            unsubscribe();
        }
    })


    //all pass kro 
    const authinfo = {
        user, loading, createUser,creategoogleUser,idsignin,logout,
    }


    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;