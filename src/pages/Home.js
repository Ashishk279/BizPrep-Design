import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Button from '@mui/joy/Button';
import bnrrt from '../assets/bnr_rt.png'
import Box from '@mui/material/Box';
import instructor from '../assets/instructor_count.svg'
import member from '../assets/member_count.svg'
import session from '../assets/session_count.svg'


export const Home = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px 170px', textAlign: 'center', paddingTop: '100px' }}>
                <div style={{ textAlign: 'left', marginRight: '8rem' }}>
                    <p style={{ fontSize: '66px', paddingRight: '4rem', margin: '2px 0px' }}>Online <span style={{ color: '#3e3ef2' }}>Sessions</span> is Now Easy</p>
                    <p style={{ fontSize: '1.3rem' }}>It is a long establisbed fact that a reader will be directed by the readable content of a page when looking at its layout</p>
                    <Button endDecorator={<ArrowCircleRightIcon />} sx={{ backgroundColor: '#5b5bb5', padding: '0.5rem 1.5rem' }}>
                        Apply Online
                    </Button>

                </div>
                <div>
                    <img src={bnrrt} alt='Bnrrt' style={{ padding: '0px 62px', position: 'relative', height: '23.5rem' }} />
                </div>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px 170px', textAlign: 'center', paddingTop: '100px' }}>
                <div style={{ backgroundColor: '#bfbfc7' , display:'flex', width: '100rem', justifyContent:'space-between', alignItems:'center'}}>
                        <div style={{ display: 'flex',padding: '2px 10px', margin: '23px 23px' }}>
                            <img src={session} alt='Sessions' style={{height: '4rem', width: '5rem', margin: '20px 9px', background:'white', borderRadius:'12px'}}/>
                            <div>
                                <h2 style={{padding: '2px 2px', margin: '8px 1px', textAlign:'left'}}>20K+</h2>
                                <p style={{ margin:'2px 2px', fontSize: '18px'}}>Sessions</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex',padding: '2px 10px', margin: '23px 23px' }}>
                            <img src={member} alt='Member Registerd' style={{height: '4rem', width: '5rem', margin: '20px 9px', background:'white', borderRadius:'12px'}}/>
                            <div>
                                <h2 style={{padding: '2px 2px', margin: '8px 1px', textAlign:'left'}}>10K+</h2>
                                <p style={{ margin:'2px 2px', fontSize: '18px'}}>Member Registerd</p>
                            </div></div>
                        <div style={{ display: 'flex',padding: '2px 10px', margin: '23px 23px' }}>
                            <img src={instructor} alt='Instructor' style={{height: '4rem', width: '5rem', margin: '20px 9px', background:'white', borderRadius:'12px'}} />
                            <div>
                                <h2 style={{padding: '2px 2px', margin: '8px 1px', textAlign:'left'}}>40K+</h2>
                                <p style={{ margin:'2px 2px', fontSize: '18px'}}>Instructor</p>
                            </div>
                        </div>

                </div>
            </Box>
        </div>
    )
}
