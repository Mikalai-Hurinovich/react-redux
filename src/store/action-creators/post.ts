import axios from "axios";
import { Dispatch } from "redux";
import { PostAction, PostActionTypes } from "../../types/post";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_POSTS });

      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      dispatch({
        type: PostActionTypes.FETCH_POSTS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: `${error}`,
      });
    }
  };
};
