import * as UserActionCreators from "./user";
import * as TodoActionCreators from "./todo";
import * as PostActionCreators from "./post";

export default {
  ...UserActionCreators,
  ...TodoActionCreators,
  ...PostActionCreators,
};
