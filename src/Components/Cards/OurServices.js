import { Card, CardContent, Typography } from '@material-ui/core';
// import NoticeCard from '../Card6';
// import { FaRegIdCard } from 'react-icons/fa'
// import { HiOutlineUsers } from 'react-icons/hi'
// import { BsCalculator } from 'react-icons/bs'
// import { VscFolderLibrary } from 'react-icons/vsc'
// import { AiOutlineUserAdd } from 'react-icons/ai'


const OurServices = () => {
  return (
    <div>
    <Card style={{maxWidth: 900, height: 420, margin: '10px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'}}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "#274472", color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
          Our Services
        </Typography>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/professionals.png" alt="Registered private/professionals" style={{width: '80px', height: '80px', padding: '10px', margin: '20px', borderRadius: '50%', backgroundColor: '#f0f0f0', border: '2px solid #29465B'}} />
        </div>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', margin: '10px', marginTop: '30px'}}>
          Registered Private / Professionals
        </Typography>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/support.png" alt="Online User Services" style={{width: '80px', height: '80px', padding: '10px', margin: '20px', borderRadius: '50%', backgroundColor: '#f0f0f0', border: '2px solid #29465B'}} />
        </div>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', margin: '20px'}}>
          Online User Services
        </Typography>
        
        </div>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/budget.png" alt="Fee Calculator" style={{width: '80px', height: '80px', padding: '5px', margin: '20px', borderRadius: '50%', backgroundColor: '#f0f0f0', border: '2px solid #29465B'}}/>
        </div>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', margin: '20px'}}>
          Fee Calculator
        </Typography>
        
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/businessman.png" alt="Check/ Track application status" style={{width: '80px', height: '80px', padding: '5px', margin: '20px', borderRadius: '50%', backgroundColor: '#f0f0f0', border: '2px solid #29465B'}} />
        </div>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', margin: '20px'}}>
          Check / Track Application Status
        </Typography>
        </div>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'left', alignItems: 'row'}}>
        <div style={{width: '100px', height: '100px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/user.png" alt="Officer Login" style={{width: '60px', height: '60px', padding: '5px', margin: '-10px', marginLeft: '30px', borderRadius: '50%', backgroundColor: '#f0f0f0', border: '2px solid #29465B'}} />
        </div>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', margin: '15px'}}>
          Officer / Login
        </Typography>
        </div>
        <br></br>
        </div>
      </CardContent>
    </Card>
    {/* <NoticeCard /> */}
    </div>
  );
};

export default OurServices;