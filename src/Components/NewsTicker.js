import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  textContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: 50, 
    marginTop: '10px', 
    backgroundColor: '#f0f0f0'
    
  },
  line1: {
    position: 'absolute',
    top: 0,
    whiteSpace: 'nowrap',
    animation: '$moveText 10s linear infinite',
    right: '10%',
    animationDelay: '0s',
  },
  line2: {
    position: 'absolute',
    top: 0,
    whiteSpace: 'nowrap',
    animation: '$moveText 10s linear infinite',
    // right: 'calc(100% + 10px)',
    right: '10%',
    animationDelay: '0s', // adjust to sync with line1
  },
  '@keyframes moveText': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(-70%)',
    },
  },
}));

function MovingText() {
  const classes = useStyles();

  return (
    <div className={classes.textContainer}>
      <div>
      <Typography style={{marginLeft: '100px', backgroundColor: '#280046', padding: '10px', width: '100px', height: '20px', color: 'white'}}>Latest News</Typography>
      {/* <Typography variant="body1" className={classes.line1}>Leading Prosperity Under DAY-NULM HIMACHAL PRADESH</Typography> */}
      <Typography variant="body1" className={classes.line2} style={{padding: '10px', color: 'blue', fontSize: '14px'}}>For street light Complaints (EESL) - in ULBs (HP). Pl Call on Toll Free - 18001803580</Typography>
      </div>
    </div>
  );
}

export default MovingText;

