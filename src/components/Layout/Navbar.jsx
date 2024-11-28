import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-blue-600">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Positive Newsletter
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/create"
          startIcon={<AddIcon />}
        >
          Create Newsletter
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;