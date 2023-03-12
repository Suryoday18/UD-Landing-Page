import { Card, CardContent, Divider, Typography } from '@material-ui/core';

const NoticeCard = () => {
  return (
    <Card style={{maxWidth: 900, margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'}}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "#274472", color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
          Notice Board
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '14px', padding: '5px'}}>
            ECI's Letter to CEOs
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '14px', padding: '5px'}}>
        ECI song  Main Bharat Hoon,Assets -reg
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '14px', padding: '5px'}}>
        Land purchase negotiation committee_2022
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '14px', padding: '5px'}}>
        Termination of nominated members of MC NP
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '14px', padding: '5px'}}>
        NGT OA NO. 593.2017 dated 11.01.2021
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '14px', padding: '5px'}}>
         MoU_CCI Rajban
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '14px', padding: '5px'}}>
        MoU_Ultratech cements Baga
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="p" style={{fontSize: '14px', padding: '5px'}}>
        <a href="http://ud.hp.gov.in/sites/default/files/Disaster%20Management/Guidelines%20for%20Flood%20Management%202008.pdf">Implementation of National Guidelines for Flood&nbsp; Management,2008</a>
        </Typography>
        <Divider></Divider>
      </CardContent>
    </Card>
  );
};

export default NoticeCard;