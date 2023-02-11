export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const RETRIEVE_DATA = 'RETRIEVE_DATA'
import axios from "axios";
import {AsyncStorage} from 'react-native'

export const signup = (email, password) => {
    return async dispatch => {
        const data = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB5xn_YqyyQFxptzATUENPHLWI5yvfNZok`, {
            email: email,
            password:password,
            returnSecureToken: true
        })
        dispatch({type:SIGNUP, token: data.data.idToken, userId: data.data.localId})
        saveData(data.data.idToken, data.data.localId)
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
        saveData(data.data.idToken, data.data.localId)
    }
}

export const logout = () => {
    return{type:LOGOUT}
}

const saveData = (token, userId) => {
    AsyncStorage.setItem('userData', JSON.stringify({
        token: token,
        userdId: userId,
    }))
}

export const retrieveData = () => {
    return async dispatch => {
        const data = await AsyncStorage.getItem('userData');
        const myData = JSON.parse(data)
        dispatch({type:RETRIEVE_DATA, token: myData.token, userId: myData.userId})
    }
}