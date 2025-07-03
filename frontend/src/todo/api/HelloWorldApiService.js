import { apiClient } from './ApiClient';

export function retrieveHelloWorldBean(){
    return apiClient.get('/hello-world-bean');
}

export const retrieveHelloWorldPathVariable = 
(username,token) => apiClient.get(`/hello-world/path-variable/${username}`,{
    headers: {
        Authorization: token
    }
}
);
