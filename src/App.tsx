import React from "react";
import PostList from "./components/PostList";
import Todolist from "./components/Todolist";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <UserList />
      <Todolist />
      <PostList />
    </div>
  );
}

export default App;
