import { Card, CardContent, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';


const ImportantLinkCard = () => {
  return (
    <Card style={{maxWidth: 900}}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "blue", color: "white", padding: "10px" }}>
            IMPORTANT LINKS
        </Typography>
        <Typography variant="body1" component="p">
            Election
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p">
            Act and Rules
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p">
            Seniority List
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p">
        Notification of Newly Constituted/Upgraded Municipalities 
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p">
            Training/Meeting/Workshop
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p">
           Circular & Notification
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p">
            Events & Workshop
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p">
            Maps
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p">
            PSG ACT/CITIZEN'S CHARACTER
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p">
           RTI Information
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p">
            Schemes/Projects/Programs
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p">
            Covid 19 Instructions/Orders
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p">
           Download Form
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImportantLinkCard;