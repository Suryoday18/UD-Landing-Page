import { Card, CardContent, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';


const SchemeCard = () => {
  return (
    <Card style={{maxWidth: 900}}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "blue", color: "white", padding: "10px" }}>
            Latest News/Scheme
        </Typography>
        <Typography variant="body1" component="h1">
        Mukhya Mantri Shahri Ajeevika Guarantee Yojna (MMSAGY)
        </Typography>
        <Divider></Divider>
        <Typography variant="body1" component="h1">
        Pradhan Mantri Street Vendors Aatma Nirbhar Nidhi (PMSVANidhi)
        </Typography>
        <Divider></Divider>
      </CardContent>
    </Card>
  );
};

export default SchemeCard;