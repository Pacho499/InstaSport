import axios from "axios";
export const FETCH_POST = 'FETCH_POST'
import Post from "../../models/Post";

export const fetchPost = () => {
    return async dispatch => {
        //operazioni asincrone
        const data = await axios.get('https://instasport-d9397-default-rtdb.firebaseio.com/posts.json')
        console.log('dati da firebase', data)
        const myPosts = data.data
        const loadedPost = [];
        for (let key in myPosts){
            loadedPost.push(
              new Post (
                key,
                myPosts[key].image,
                myPosts[key].title,
                myPosts[key].description,
                myPosts[key].userId,
                myPosts[key].userName,
                myPosts[key].userImage,
            )  
            )
            
        }
        console.log(loadedPost)
        dispatch({type:FETCH_POST, posts: loadedPost})
    }
}