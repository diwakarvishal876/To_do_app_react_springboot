import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";
//1: Create a Context
export const AuthContext = createContext(null)
export const useAuth =  () => useContext(AuthContext)

//2: Share the created context with other components
export const AuthProvider=({ children }) =>{

    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
     const [token, setToken] = useState(null);
    
    async function login(username, password) {
        // Simulate authentication logic
        try {
            const response = await executeJwtAuthenticationService(username, password);
            if (response.status === 200) {
                const jwtToken='Bearer ' + response.data.token;
            setAuthenticated(true);
            setUsername(username);
            setToken(jwtToken); // Store the token
            apiClient.interceptors.request.use(
                config => {
                    console.log("Setting Authorization header for API requests");
                    config.headers.Authorization = jwtToken; // Set the token in the request headers
                    return config;
                }
            )
            return true; // Authentication successful
                } 
            else {
            logout(); // Clear authentication state on failure
            return false;
                }
            }
            catch (error) {
            console.error("Authentication failed:", error);
            logout(); // Clear authentication state on error
            return false;
            }
        
}
    
    function logout(){
        setAuthenticated(false);
        setUsername(null);
        setToken(null); // Clear the token
    }
    return (
        <AuthContext.Provider value={ {isAuthenticated,login,logout,username,token}  }>
            {children}
        </AuthContext.Provider>
    )
} 
