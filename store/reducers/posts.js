import DATA from '../../data/fake-data';
import { FETCH_POST } from '../action/fetchPost'
const initialState = {
  posts: DATA,
};
const posts = (state = initialState, action) => {
  // switch(action.type){
  //   case FETCH_POST:
  //     return{
  //       post: action.posts
  //     }
  //   default:
  //     return state
  // }
  return state
};

export default posts;
