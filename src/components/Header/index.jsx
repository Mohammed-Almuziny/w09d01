import React from "react";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  IconButton,
  Link,
  Button,
} from "@mui/material";

import { LeftSide } from "./LeftSide";

export const Header = ({ user, setUser, setToken, setRole }) => {
  return (
    <header className="App">
      <Box sx={{ flexGrow: 1, pb: 4 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" mr={2}>
              TodosSite
            </Typography>

            <Link color="inherit" underline="none" href="/" mr={2}>
              home
            </Link>
            <Link color="inherit" underline="none" href="/todos" mr={2}>
              todos
            </Link>

            <Typography sx={{ flexGrow: 1 }}></Typography>

            <LeftSide
              user={user}
              setUser={setUser}
              setToken={setToken}
              setRole={setRole}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
