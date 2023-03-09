import { Box, Typography, Divider } from '@mui/material';

const FooterOne = () => {
  return (
    <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', bgcolor: '#f0f0f0' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h6"  sx={{ margin: '10px' }}>Home</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" sx={{ margin: '10px', fontStyle: "italic"}}>Accessiblity Statement</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" sx={{ margin: '10px' }}>Websites Policies</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" sx={{ margin: '10px', fontStyle: "italic"}}>Terms and Conditions</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" sx={{ margin: '10px', fontStyle: "italic"}}>Desclaimer</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" sx={{ margin: '10px' }}>Site Map</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" sx={{ margin: '10px', fontStyle: "italic"}}>Contact Us</Typography>
        <Divider style={{ margin: '10px 0' }} />
        </Box>
        <Typography variant="p" sx={{ marginTop: '10px', fontStyle: "italic"}}>Copyright © 2023. Urban Development Department, Government of Himachal Pradesh, India Transforming Cities. All rights reserved.</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="p" sx={{ marginTop: '10px', fontStyle: "italic"}}>For any query regarding this website Please Contact the "Web Information Manager:<strong>Name: Niranjana Kotvi, Asstt. Programmer(IT), Phone No: 9418060606, Email id: ud-hp(at)nic(dot)in</strong></Typography>
        <Divider style={{ margin: '10px 0' }} />
    </Box>
  );
};

export default FooterOne;
