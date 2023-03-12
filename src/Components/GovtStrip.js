import { Box, Typography } from '@mui/material';

const GovtStrip = () => {
  return (
    <Box sx={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', bgcolor: '#f0f0f0' }}>
       <img src="http://www.ud.hp.gov.in/sites/default/files/logo.png" alt="image1" style={{ width: '50px', height: '50px', marginLeft: '-300px', marginRight: '30px' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h4" fontWeight="bold" sx={{ marginTop: '10px', fontSize: '20px', width: '450px' }}>Urban Development Department</Typography>
        <Typography variant="h4" sx={{ marginTop: '10px', fontSize: '10px', fontStyle: "italic", width: '450px'}}>Govt of Himanchal Pradesh, India Transforming sites</Typography>
        </Box>
      <div style={{transform: 'translateX(100px)'}}>
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/logo1.png" alt="image2" style={{ width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px' }} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/emblem.png" alt="image3" style={{ width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px' }} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/G20-theme-and-logo_1.png" alt="image4" style={{ width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px' }} />
      <img src='https://www.hsvphry.org.in/assets/img/150-years-Mahatma-Gandhi-Logo.png' alt='image5' style={{width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px'}}/>
      {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'columns'}}>
        <img src='http://www.ud.hp.gov.in/sites/default/files/inline-images/CM_1.png' alt='imgae6' style={{width: '80px', height: '80px'}}/>
        <p>Shri Sukhvinder Singh</p>
        <p>Hon'ble Chief Minister</p>
      </div> */}
      
      </div>
    </Box>
  );
};

export default GovtStrip;
