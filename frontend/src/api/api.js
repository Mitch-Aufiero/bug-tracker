const BASE_URL = 'http://localhost:5000'; // pull from env file

export const apiRequest = async (endpoint, method = 'GET', body = null, headers = {}) => {
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }
   
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.message || 'Something went wrong!');
    }

    const data = await response.json();
    return data;
};
