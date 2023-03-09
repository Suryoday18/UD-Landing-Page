import { Card, CardContent, Typography } from '@material-ui/core';

const NoticeCard = () => {
  return (
    <Card style={{maxWidth: 900}}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "blue", color: "white", padding: "10px" }}>
          Notice Board
        </Typography>
        <Typography variant="body1" component="p">
            ECI's Letter to CEOs
        </Typography>
        <br></br>
        <Typography variant="body1" component="p">
        ECI song  Main Bharat Hoon,Assets -reg
        </Typography>
        <br></br>
        <Typography variant="body1" component="p">
        Land purchase negotiation committee_2022
        </Typography>
        <br></br>
        <Typography variant="body1" component="p">
        Termination of nominated members of MC NP
        </Typography>
        <br></br>
        <Typography variant="body1" component="p">
        NGT OA NO. 593.2017 dated 11.01.2021
        </Typography>
        <br></br>
        <Typography variant="body1" component="p">
         MoU_CCI Rajban
        </Typography>
        <br></br>
        <Typography variant="body1" component="p">
        MoU_Ultratech cements Baga
        </Typography>
        <br></br>
        <Typography variant="body1" component="p">
        <a href="http://ud.hp.gov.in/sites/default/files/Disaster%20Management/Guidelines%20for%20Flood%20Management%202008.pdf">Implementation of National Guidelines for Flood&nbsp; Management,2008</a>
        </Typography>
        <br></br>
      </CardContent>
    </Card>
  );
};

export default NoticeCard;