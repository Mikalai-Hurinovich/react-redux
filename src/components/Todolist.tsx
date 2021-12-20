import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Todolist: React.FC = () => {
  const { todos, error, limit, loading, page } = useTypedSelector(
    (state) => state.todo
  );

  const pages: Array<number> = [1, 2, 3, 4, 5];

  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <h1>Todolist</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <hr />
      <div>
        {pages.map((p) => (
          <div
            key={p}
            style={{
              display: "inline-block",
              marginRight: "10px",
              padding: "5px",
              cursor: "pointer",
              border: p === page ? "1px solid blue" : "1px solid gray",
            }}
            onClick={() => setTodoPage(p)}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
