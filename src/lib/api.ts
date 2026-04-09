import axios from 'axios';

// Create an Axios instance with default config
export const api = axios.create({
    baseURL: 'http://localhost:5001/api', // Make sure this matches your backend port
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor: Attach JWT token if available
api.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor: Handle 401 Unauthorized (logout)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Optional: Clear token and redirect to login if 401 occurs
            // We might want to handle this in the AuthContext instead to avoid circular deps
            // or duplicate redirects, but clearing storage is safe.
            if (typeof window !== 'undefined') {
                // localStorage.removeItem('token'); 
                // We'll let AuthContext handle the redirect logic to keep this pure
            }
        }
        return Promise.reject(error);
    }
);
