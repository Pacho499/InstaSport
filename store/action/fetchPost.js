import axios from "axios";
export const FETCH_POST = 'FETCH_POST'

export const fetchPost = () => {
    return async dispatch => {
        //operazioni asincrone
        const data = await axios.get('https://instasport-d9397-default-rtdb.firebaseio.com/posts.json')
        console.warn(data)
        dispatch({type:FETCH_POST})
    }
}