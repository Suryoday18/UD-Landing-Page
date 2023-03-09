import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import UsefulLinkCard from '../Card5';

const items = [
  {
    image: "http://www.ud.hp.gov.in/sites/default/files/inline-images/CM_1.png",
    text1: "Shri Sukhvinder Singh",
    text2: "Hon'ble Chief Minister"
  },
  {
    image: "http://www.ud.hp.gov.in/sites/default/files/inline-images/photo_0.jpg",
    text1: "Urban Development Minister",
    text2: ""
  },
  {
    image: "http://www.ud.hp.gov.in/sites/default/files/inline-images/dev.png",
    text1: "Sh.Devesh Kumar, IAS",
    text2: "Pr.Secretary"
  },
  {
    image: "http://www.ud.hp.gov.in/sites/default/files/inline-images/download_0.png",
    text1: "Sh.Manmohan Sharma,IAS",
    text2: "Director"
  },
];

const CardComponent = () => {
  return (
    <div>
    <Card style={{maxWidth: 500}}>
      <CardContent>
        <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'column'}}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} style={{ display: 'flex', flexDirection: 'row'}}>
              <CardMedia
                component="img"
                image={item.image}
                title={`Item ${index + 1}`}
              />
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px', }}>
              <Typography variant="body1" style={{color: 'blue', fontWeight: 'bold', fontSize: '20px', width: '60%'}}>{item.text1}</Typography>
              <Typography variant="body2" style={{color: 'blue', width: '60%'}}>{item.text2}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
    <UsefulLinkCard />
    </div>
  );
};

export default CardComponent;