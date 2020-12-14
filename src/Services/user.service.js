//import { authHeader } from '../_helpers';

export const userService = {
    login,
    getAll
   /* logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete*/
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:5000/api/authentication`, requestOptions)
        .then(handleResponse)
        .then(res => {
            console.log(res)
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', JSON.stringify(res.token));

            return res;
        });
}

// function logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('user');
// }

function getAll() {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };

    return fetch(`http://localhost:5000/api/viewtickets`, requestOptions).then(handleResponse);
}

// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`/users/${id}`, requestOptions).then(handleResponse);
// }

// function register(user) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`/users/register`, requestOptions).then(handleResponse);
// }

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`/users/${user.id}`, requestOptions).then(handleResponse);;
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };

//     return fetch(`/users/${id}`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
              //  logout();
               // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function authHeader() {

    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('token'));
    if (user) {
        return { 'Authorization': 'Bearer ' + user };
    } else {
        return {};
    }
}