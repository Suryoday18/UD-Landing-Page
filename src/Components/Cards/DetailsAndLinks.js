import { Card, CardContent, Typography, Grid, CardHeader } from '@material-ui/core';
import {MdScreenshotMonitor} from 'react-icons/md'
import {IoMdReverseCamera} from 'react-icons/io'
import {HiOutlineClipboardDocumentCheck} from 'react-icons/hi2'
import {BsFillClipboard2CheckFill} from 'react-icons/bs'
import {MdOutlineFactCheck} from 'react-icons/md'
import {BsFillCalendarXFill} from 'react-icons/bs'
import FormLinks from './FormLinks';




function DetailsAndLinks() {
  
  return (
    <Grid style={{background: '#f0f0f0', display: 'flex', flexDirection: 'row', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;'}}>
    <Card sx={{ maxWidth: 900 }}>
    <CardHeader
    title={
      <Typography variant="h6" style={{color: '#003366', fontStyle: 'italic', fontWeight: 'bold', marginLeft: '200px'}}>
        Application Details
      </Typography>
    }
    style={{ backgroundColor: '#F7F7F7' }}
  />
    <CardContent style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginRight: '100px'}}>
      <Grid item xs={12} sm={6} md={4}>
        <Grid item xs={12} sm={6} md={4}>
            <Card style={{ width: '280px', height: '180px', margin: '20px -30px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', backgroundColor: '#4ca9d9', backgroundImage: 'linear-gradient(to right, #BCD2E8, #2E5984)'}}>
                <CardContent>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <Typography variant='h6' style={{color: '#1569C7', fontSize: '50px', padding: '10px'}}>14020</Typography>
                <MdOutlineFactCheck style={{marginTop: '15px', width: '80px', height: '80px', color: '#2B3856'}}/>
                </div>
                  <Typography color="textSecondary" style={{fontWeight: 'bold', color: '#003366', fontSize: '20px'}}>
                    Applied
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{ width: '280px', height: '180px', margin: '20px -30px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', backgroundColor: '#4ca9d9', backgroundImage: 'linear-gradient(to right, #BCD2E8, #2E5984)'}}>
                <CardContent>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <Typography variant='h6' style={{color: '#1569C7', fontSize: '50px', padding: '10px'}}>
                    1120
                  </Typography>
                    <MdScreenshotMonitor style={{ margin: '20px', width: '80px', height: '80px', color: '#2B3856'}} />
                </div>
                  <Typography color="textSecondary" style={{fontWeight: 'bold', color: '#003366', fontSize: '20px'}}>
                    Under Process
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{ width: '280px', height: '180px', margin: '20px -30px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', backgroundColor: '#4ca9d9', backgroundImage: 'linear-gradient(to right, #BCD2E8, #2E5984)'}}>
                <CardContent>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <Typography variant='h1' style={{color: '#1569C7', fontSize: '50px', padding: '10px'}}>
                    2458
                  </Typography>
                  <IoMdReverseCamera style={{width: '80px', height: '80px', color: '#2B3856', marginLeft: '20px'}}/>
                  </div>
                  <Typography color="textSecondary" style={{fontWeight: 'bold', color: '#003366', fontSize: '20px'}}>
                    Reverted
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{ width: '280px', height: '180px', margin: '20px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', backgroundColor: '#4ca9d9', backgroundImage: 'linear-gradient(to right, #BCD2E8, #2E5984)'}}>
                <CardContent>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <Typography variant='h1' style={{color: '#1569C7', fontSize: '50px', padding: '10px', marginRight: '20px'}}>
                    630
                  </Typography>
                  <HiOutlineClipboardDocumentCheck style={{width: '80px', height: '80px', color: '#2B3856'}}/>
                  </div>
                  <Typography color="textSecondary" style={{fontWeight: 'bold', color: '#003366', fontSize: '20px'}}>
                    Provisional Approved
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{ width: '280px', height: '180px', margin: '20px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', backgroundColor: '#4ca9d9', backgroundImage: 'linear-gradient(to right, #BCD2E8, #2E5984)'}}>
                <CardContent>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <Typography variant='h1' style={{color: '#1569C7', fontSize: '50px', padding: '10px'}}>
                    9746
                  </Typography>
                  <BsFillClipboard2CheckFill style={{width: '60px', height: '60px', color: '#2B3856', marginLeft: '20px', marginTop: '10px'}}/>
                  </div>
                  <Typography color="textSecondary" style={{fontWeight: 'bold', color: '#003366', fontSize: '20px'}}>
                    Permission Granted
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{ width: '280px', height: '180px', margin: '20px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', backgroundColor: '#4ca9d9', backgroundImage: 'linear-gradient(to right, #BCD2E8, #2E5984)'}}>
                <CardContent>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <Typography variant='h1' style={{color: '#1569C7', fontSize: '50px', marginRight: '80px'}}>
                    66
                  </Typography>
                  <BsFillCalendarXFill style={{width: '60px', height: '60px', color: '#2B3856'}}/>
                  </div>
                  <Typography color="textSecondary" style={{fontWeight: 'bold', color: '#003366', fontSize: '20px'}}>
                    Rejected
                  </Typography>
                </CardContent>
            </Card>
            </Grid>
      </Grid>
    </CardContent>
    </Card>  
    <FormLinks />
  </Grid>
  );
}
export default DetailsAndLinks
