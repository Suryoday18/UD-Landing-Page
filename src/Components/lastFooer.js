import { Box, Typography, Divider } from '@mui/material';

const LastFooter = () => {
  return (
    <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', bgcolor: '#280046' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Typography variant="h5"  sx={{ margin: '10px', color: 'white', fontSize: '15px' }}>Total Visitors: 76091</Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Typography variant="h5" sx={{ margin: '10px', color: 'white', fontSize: '15px' }}>Last Updated On: 15-02-2023 04:02:32</Typography>
          <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/valid-xhtml10.png" alt="image8" style={{margin: '10px'}} />
          <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/vcss.png" alt="image9"  style={{margin: '10px'}} />
          <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/wcag2AA.png" alt="image10" style={{margin: '10px'}}/>
        </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px', width: '100%'}}>
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/india-gov.jpg" alt="image1" height='50px' style={{margin: '20px'}} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/mygov.jpg" alt="image2" height='50px' style={{margin: '20px'}} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/goiweb.jpg" alt="image3" height='50px' style={{margin: '20px'}} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/paisa.jpg" alt="image4" style={{width: '150px', height: '50px', margin: '20px'}} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/Logo%2050%20th%20HP.jpg" alt="image5" style={{width: '150px', height: '50px', margin: '20px'}} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/75%20year.jpg" alt="image6" style={{width: '150px', height: '50px', margin: '20px'}}/>
      </Box>
    </Box>
   
  );
};

export default LastFooter;
