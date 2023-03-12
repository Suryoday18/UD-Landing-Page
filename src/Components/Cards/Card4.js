import { Card, CardContent, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';


const ImportantLinkCard = () => {
  return (
    <Card style={{maxWidth: 900, margin: '20px', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "#274472", color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
            IMPORTANT LINKS
        </Typography>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
            Election
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
            Act and Rules
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
            Seniority List
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
        Notification of Newly Constituted/Upgraded Municipalities 
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
            Training/Meeting/Workshop
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
           Circular & Notification
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
            Events & Workshop
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
            Maps
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
            PSG ACT/CITIZEN'S CHARACTER
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
           RTI Information
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
            Schemes/Projects/Programs
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
            Covid 19 Instructions/Orders
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '10px'}}>
           Download Form
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImportantLinkCard;