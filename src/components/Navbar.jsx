import { AppBar, Box, Button, Toolbar } from "@mui/material";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar variant="elevation" position="sticky" sx={{ p: 1 }}>
      <Toolbar>
        <Box component="img" src={logo} width="100px" />
        <Box sx={{flex:1}}>
          <Button component={Link} to='/' variant="text" color="inherit">
            Home
          </Button>
          <Button component={Link} to='/about' variant="text" color="inherit">
            About
          </Button>
          <Button component={Link} to='/contact' variant="text" color="inherit">
            Contact
          </Button>
        </Box>
        <Button variant="contained" color="error">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
