import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { todoReducer } from "./todoReducer";
import { UserReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  todo: todoReducer,
  posts: postReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
