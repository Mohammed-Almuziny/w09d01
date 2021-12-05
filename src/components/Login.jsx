import { React, useState } from "react";
import {
  Container,
  Box,
  FormGroup,
  TextField,
  Typography,
  Button,
} from "@mui/material";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" mb={2}>
        log in
      </Typography>
      <Box sx={{ bgcolor: "background.paper", p: 2 }}>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              type="email"
              id="userName"
              label="user Name Or Email"
              placeholder="user Name Or Email"
              margin="normal"
              required
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              type="password"
              id="password"
              label="password"
              placeholder="password"
              margin="normal"
              required
            />
          </FormGroup>
          <Typography align="center" my={2}>
            <Button variant="contained" type="submit">
              log in
            </Button>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};
