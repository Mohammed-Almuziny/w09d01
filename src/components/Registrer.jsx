import React from "react";
import {
  Container,
  Box,
  FormGroup,
  TextField,
  Typography,
  Button,
} from "@mui/material";

export const Registrer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("sumbit");
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" mb={2}>
        register
      </Typography>
      <Box sx={{ bgcolor: "background.paper", p: 2 }}>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              fullWidth
              id="userName"
              label="userName"
              placeholder="userName"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              type="email"
              id="email"
              label="email"
              placeholder="Email"
              margin="normal"
              required
            />
            <TextField
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
            <Button color="primary" variant="contained" type="submit">
              register
            </Button>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};
