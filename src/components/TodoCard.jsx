import React from "react";
import { Typography } from "@mui/material";

export const TodoCard = ({ todo }) => {
  return (
    <div>
      <Typography align="center"> {todo.name}</Typography>
    </div>
  );
};
