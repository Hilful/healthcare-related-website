import React, { createContext } from 'react';
import useFirebase from '../Component/hooks/UseFirebase';

export const AuthContext = createContext ()
// authprovaider 
const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;