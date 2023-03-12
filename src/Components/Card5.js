import { Card, CardContent, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';


const UsefulLinkCard = () => {
  return (
    <Card style={{maxWidth: 900, margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "#274472", color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px'}}>
            USEFUL Links
        </Typography>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        <a href="http://himachal.nic.in" class="gov-otherlinks" rel='noreferrer' target='_blank'>HP Government</a>
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            Him Pragati
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            e-Samadhan
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        Iproams
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            HP Forms Repository
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
           e-Sameeksha
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            National Portal of India
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            Ministery of Finance
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            MyGov
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
           Darpan
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            MoHUPA
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            MOUD
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
           SmartCIties
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
        SwachhBharatUrban
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            Photo Gallery
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
         ​Registration of Mukhya Mantri Shahari   Ajeevika Guarantee Yojana - online portal 
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            E-Tendering
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            Natural Water Sources
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
           Online Building Permission
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            Websites of ULBs in HP
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
          eDistrict Himanchal Pradesh
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UsefulLinkCard;