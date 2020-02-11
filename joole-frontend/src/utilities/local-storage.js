export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};

//User Storage
export const saveUser = user => {
    try {
        localStorage.setItem('authUser', user);
    } catch (e) {}    
}

export const loadUser = () => {
    try {
        localStorage.getItem('authUser');
    } catch (e) {}    
}

export const clearUser = () => {
    try {
        localStorage.removeItem('authUser');
    } catch (e) {}
};