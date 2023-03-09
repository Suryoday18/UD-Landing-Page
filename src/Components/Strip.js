import { AppBar, Toolbar, Typography } from '@mui/material';

function Strip() {
  return (
    <AppBar position="static" color='secondary'>
      <Toolbar>
        <Typography variant="h6" component="div">
          Skip to main content
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Strip