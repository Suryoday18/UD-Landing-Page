import { Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';


const useStyles = makeStyles({
  button: 
  {
    padding: '10px',
    borderRadius: '10px',
    fontSize: '12px',
    backgroundColor: '#4ca9d9',
    backgroundImage: 'linear-gradient(to bottom, #BCD2E8, #2E5984)',
    transition: 'background-color: .5s ease'
  },
})


const SchemeCard = () => {
  const classes = useStyles()
  return (
    <Card style={{maxWidth: 900, margin: '10px', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
      <CardContent>
        <Typography variant="h6" style={{ backgroundColor: '#274472', color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
            Latest News/Scheme
        </Typography>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '10px', marginBottom: '10px'}}>
        Mukhya Mantri Shahri Ajeevika Guarantee Yojna (MMSAGY)
        </Button>
        <Divider></Divider>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '10px'}}>
        Pradhan Mantri Street Vendors Aatma Nirbhar Nidhi (PMSVANidhi)
        </Button>
      </CardContent>
    </Card>
  );
};

export default SchemeCard;