import React from 'react';
import { AppBar, Toolbar, Button, } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    return null
    // setAnchorEl(event.currentTarget);
  };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  return (
    <AppBar position="static" style={{backgroundColor: '#274472', height: '60px'}} >
      <Toolbar>
        <Button color='inherit' style={{marginLeft: '10px', fontSize: '12px'}}>Home</Button>
        <Button color="inherit" style={{marginLeft: '10px', fontSize: '12px'}}>About Us</Button>
        <Button color="inherit" style={{marginLeft: '10px'}}>Act and Rules</Button>
        <Button color="inherit" onClick={handleClick} style={{marginLeft: '10px', fontSize: '12px'}}>Schemas & Projects</Button>
        <Button color='inherit' style={{marginLeft: '10px', fontSize: '12px'}}>Solid Waste Management/NGT</Button>
        <Button color="inherit" style={{marginLeft: '10px', fontSize: '12px'}}>Muncipalities-At A Glance</Button>
        <Button color="inherit" style={{marginLeft: '10px', fontSize: '12px'}}>Tenders/RFP & Advt.</Button>
        <Button color="inherit" onClick={handleClick} style={{marginLeft: '10px', fontSize: '12px'}}>Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

