export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
import axios from "axios";

export const signup = (email, password) => {
    return async dispatch => {
        const data = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB5xn_YqyyQFxptzATUENPHLWI5yvfNZok`, {
            email: email,
            password:password,
            returnSecureToken: true
        })
        dispatch({type:SIGNUP, token: data.data.idToken, userId: data.data.localId})
    }
}

export const signin = (email, password) => {
    return async dispatch => {
        const data = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB5xn_YqyyQFxptzATUENPHLWI5yvfNZok`, {
            email: email,
            password:password,
            returnSecureToken: true
        })

        dispatch({type:SIGNIN, token: data.data.idToken, userId: data.data.localId})
    }
}