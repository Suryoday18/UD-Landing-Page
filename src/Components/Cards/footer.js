import { Box, Typography, Divider } from '@mui/material';

const FooterOne = () => {
  return (
    <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', bgcolor: '#f0f0f0', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h6"  sx={{ margin: '10px', fontSize: '15px' }}>Home</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" sx={{ margin: '10px', fontStyle: "italic", fontSize: '15px'}}>Accessiblity Statement</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" sx={{ margin: '10px', fontSize: '15px' }}>Websites Policies</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" sx={{ margin: '10px', fontStyle: "italic", fontSize: '15px'}}>Terms and Conditions</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" sx={{ margin: '10px', fontStyle: "italic", fontSize: '15px'}}>Desclaimer</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" sx={{ margin: '10px', fontSize: '15px' }}>Site Map</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" sx={{ margin: '10px', fontStyle: "italic", fontSize: '15px'}}>Contact Us</Typography>
        <Divider style={{ margin: '10px 0' }} />
        </Box>
        <Typography variant="p" sx={{ marginTop: '10px', fontStyle: "italic", fontSize: '15px'}}>Copyright © 2023. Urban Development Department, Government of Himachal Pradesh, India Transforming Cities. All rights reserved.</Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="p" sx={{ marginTop: '10px', fontStyle: "italic", fontSize: '12px'}}>For any query regarding this website Please Contact the "Web Information Manager:<strong>Name: Niranjana Kotvi, Asstt. Programmer(IT), Phone No: 9418060606, Email id: ud-hp(at)nic(dot)in</strong></Typography>
        <Divider style={{ margin: '10px 0' }} />
    </Box>
  );
};

export default FooterOne;
