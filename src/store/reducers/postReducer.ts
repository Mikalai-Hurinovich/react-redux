import { PostAction, PostActionTypes, PostState } from "../../types/post";

const initialState: PostState = {
  posts: [],
  error: null,
  loading: false,
};

export const postReducer = (state = initialState, action: PostAction) => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return { ...state, loading: true };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
