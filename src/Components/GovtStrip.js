import { Box, Typography, Divider } from '@mui/material';

const GovtStrip = () => {
  return (
    <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', bgcolor: '#f0f0f0' }}>
       <img src="http://www.ud.hp.gov.in/sites/default/files/logo.png" alt="image1" style={{ width: '10%', height: '33%', margin: '20px' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" fontWeight="bold" sx={{ marginTop: '10px' }}>Urban Development Department</Typography>
        <Typography variant="h4" sx={{ marginTop: '10px', fontStyle: "italic"}}>Govt of Himanchal Pradesh, India Transforming sites</Typography>
        <Divider style={{ margin: '10px 0' }} />
        </Box>
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/logo1.png" alt="image2" style={{ width: '10%', height: '33%', margin: '20px' }} />
      <Divider style={{ margin: '10px 0' }} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/emblem.png" alt="image3" style={{ width: '10%', height: '33%', margin: '20px' }} />
      <Divider style={{ margin: '10px 0' }} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/G20-theme-and-logo_1.png" alt="image4" style={{ width: '10%', height: '33%', margin: '20px' }} />
    </Box>
  );
};

export default GovtStrip;
