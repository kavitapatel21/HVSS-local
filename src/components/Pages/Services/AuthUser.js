import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

const AuthUser = () => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/');
    }

    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    // const http = axios.create({
    //     baseURL: apiUrl,
    //     headers: {
    //         "Content-type": "application/json",
    //     }
    // });

    // Define a function for making API calls
    const httppost = async (endpoint, method = 'POST', data = null) => {
        // Construct the full URL for the API endpoint
        const url = `${apiUrl}/${endpoint}`;

        // Configure the options for the fetch request
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',  // Set the content type to JSON
                // You can add other headers here if needed
            },
        };

        // If data is provided, include it in the request body
        if (data) {
            options.body = JSON.stringify(data);
        }

        try {
            // Make the API request using the Fetch API
            const response = await fetch(url, options);

            // Check if the response status is within the successful range (200-299)
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            // Parse and return the JSON response
            return await response.json();
        } catch (error) {
            // Handle errors during the API request
            console.error('API request failed:', error);
            throw error;  // Propagate the error for further handling
        }
    };

    return {
        setToken: saveToken,
        token,
        user,
        getToken,
        httppost,
        logout
    }
}

export default AuthUser
