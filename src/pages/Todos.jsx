import { React, useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";

import { TodoCard } from "./../components/TodoCard";

export const Todos = ({ user, token }) => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/todos`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((result) => {
          setTodos(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) getTodos();
  }, []);

  return user ? (
    <Container>
      {todos.map((todo) => (
        <TodoCard todo={todo} />
      ))}
    </Container>
  ) : (
    <Typography>you have to log in</Typography>
  );
};
