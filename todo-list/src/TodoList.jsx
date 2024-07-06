const intialData = () => {
  // if localStorage is empty JSON.parse returns null
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

import { useState, useEffect } from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import { Box, Typography } from "@mui/material";

export default function TodoList() {
  const [todos, setTodos] = useState(intialData);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id);
    });
  };
  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((item) => {
        if (item.id === id) return { ...item, completed: !item.completed };
        return item;
      });
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), text, completed: false },
      ];
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 5,
      }}
    >
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
          Todos
        </Typography>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              item={todo}
              deleteItem={() => deleteTodo(todo.id)}
              toggle={() => toggleTodo(todo.id)}
            />
          );
        })}
        <AddTodoForm addItem={addTodo} />
      </List>
    </Box>
  );
}
