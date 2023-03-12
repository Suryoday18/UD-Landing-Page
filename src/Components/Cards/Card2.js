import { Card, CardContent, Typography } from '@material-ui/core';
import NoticeCard from '../Card6';

const AboutUsCard = () => {
  return (
    <div>
    <Card style={{maxWidth: 900, margin: '10px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'}}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "#274472", color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
          About Us
        </Typography>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            The Himachal Pradesh State is a predominantly hill State with the total population of 68.65 (6.85 Millions) residing in 55673 sq km area. Like any other part of our great country, urbanization is fast increasing and posing variety of problems related to urbanization in Himachal Pradesh as well
        </Typography>
        <br></br>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
            Currently urban population of the state is 7.88 Lakhs  but it is fast increasing. The state currently has 5 Municipal Corporations , 29 Municipal Councils and 27 Nagar Panchayats to provide qualitative municipal services in Urban Areas.- 
        </Typography>
        <br></br>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
           The urban Development Department of State, in close partnership with ULBs is striving to find innovative and advanced technological solutions to urban problems of the State like; integrated urban transport, Sanitation, Solid Waste Management, Urban Infrastructure, Urban Poverty, Urban Housing, Urban Planning, Financial Sustainability of ULBs and general Urban Governance.
        </Typography>
        <br></br>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
          The task is gigantic; but the Department find it to be achievable through the active community involvement and hard work and sincere efforts of all officers and employees of the department.
        </Typography>
        <br></br>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px'}}>
          Visitors of this website are humbly requested to give their valuable suggestions and feed back to assist the Department of Urban Development in its "pursuit of excellence."
        </Typography>
        <br></br>
      </CardContent>
    </Card>
    <NoticeCard />
    </div>
  );
};

export default AboutUsCard;