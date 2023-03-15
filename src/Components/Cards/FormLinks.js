import { Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';


const useStyles = makeStyles({
  button: 
  {
    padding: '10px',
    borderRadius: '10px',
    fontSize: '12px',
    backgroundColor: '#4ca9d9',
    backgroundImage: 'linear-gradient(to right, #BCD2E8, #2E5984)',
    transition: 'background-color: .5s ease'
  },
})


const FormLinks = () => {
  const classes = useStyles()
  return (
    <Card style={{maxWidth: 600, margin: '10px', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
      <CardContent>
        <Typography variant="h6" style={{ backgroundColor: '#274472', color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
            Form Links
        </Typography>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '10px'}}>
            Form of application for permission of Development of Land / Construction of Building. (Form-12) - Apply Now
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '10px', marginBottom: '10px'}}>
        Form of application for permission of sub-division / development of land. (Form - 11) - Apply Now
        </Button>
        <Divider></Divider>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '10px'}}>
        Form Application for composition of offences under section 39-C read with sub-section (3) of section (Form - 26) - Apply Now
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '10px'}}>
        Registered citizen user may apply for NOC of water, Electricity and severage. - Apply Now
        </Button>
        <Divider style={{margin: '10px'}}></Divider>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', width: '570px', height: '60px', borderRadius: '10px', fontSize: '14px', marginTop: '10px'}}>
        Application for permission of Mobile Tower - Apply Now
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', width: '570px', height: '60px', borderRadius: '10px', fontSize: '14px', marginTop: '10px'}}>
        Application for permission of NOC - Apply Now
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '10px', marginBottom: '10px'}}>
         Form of application for permission of sub-division / development of land. (Form - 11) - Apply Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default FormLinks;