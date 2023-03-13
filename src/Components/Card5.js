import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import Divider from '@mui/material/Divider';


const useStyles = makeStyles({
    a: 
    {
        color: '#2E5984',
        transition: 'color 0.2s ease',
        textDecoration: 'none'
    },
    '&:hover': {
        color: 'orange',
        backgroundColor: '#4ca9d9',
        textDecoration: 'none', 
      },
  })

const UsefulLinkCard = () => { 
    const classes = useStyles()

  return (
    <Card style={{maxWidth: 900, margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "#274472", color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px'}}>
            USEFUL Links
        </Typography>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="http://himachal.nic.in" className={classes.a} rel='noreferrer' target='_blank' style={{textDecoration: 'none'}}>HP Government</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://cmsankalp.hp.gov.in/Default.aspx" className={classes.a} rel='noreferrer' target="_blank" style={{textDecoration: 'none'}}>CM SEVA SANKALP -1100</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://himpragati.nic.in/" className={classes.a} rel='noreferrer' target="_blank">Him Pragati</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://esamadhan.nic.in/welcome.aspx?ReturnUrl=/AddRemarksGrievanceCMO.aspx" className={classes.a} rel='noreferrer' target="_blank">e-Samadhan</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="http://iproams.himachalpr.gov.in/" className={classes.a} rel='noreferrer' target="_blank">Iproams</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://esameeksha.hp.nic.in/" className={classes.a} rel='noreferrer' target="_blank">e-Sameeksha</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="http://india.gov.in" className={classes.a} rel='noreferrer' target="_blank">National Portal of India</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="http://finmin.nic.in" className={classes.a} rel='noreferrer' target="_blank">Ministry of finance</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://mygov.in" className={classes.a} rel='noreferrer' target="_blank">MyGov</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://mygov.in" className={classes.a} rel='noreferrer' target="_blank">MyGov</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://hp.dmdashboard.nic.in/palogin.aspx" className={classes.a} rel='noreferrer' target="_blank">Darpan</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="http://moud.gov.in" className={classes.a} rel='noreferrer' target="_blank">MOUD</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="http://smartcities.gov.in" className={classes.a} rel='noreferrer' target="_blank">SmartCities</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://swachhbharaturban.gov.in/ISNAHome.aspx" className={classes.a} rel='noreferrer' target="_blank">SwachhBharatUrban</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="http://ud.hp.gov.in/gallery" className={classes.a} rel='noreferrer' target="_blank">Photo Gallery</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://mmsagyud.hp.gov.in/" target="_blank" className={classes.a} rel='noreferrer'> ​Registration of Mukhya Mantri Shahari   Ajeevika Guarantee Yojana - online portal </a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://hptenders.gov.in/nicgep/app" target="_blank" className={classes.a} rel='noreferrer'>E-Tendering</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://mobileappshp.nic.in/nwss/Default.aspx" target="_blank" className={classes.a} rel='noreferrer'>Natural Water Sources</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://mobileappshp.nic.in/nwss/Default.aspx" target="_blank" className={classes.a} rel='noreferrer'>Natural Water Sources</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="http://ud.hp.gov.in/building-planning-permissions/websites-of-ulbs" target="_blank" className={classes.a} rel='noreferrer'>Website of ULBs in HP</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="https://edistrict.hp.gov.in/" target="_blank" className={classes.a} rel='noreferrer'>eDistrict Himachal Pradesh</a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UsefulLinkCard;