import React from 'react'
import { Box } from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Button from '@mui/joy/Button';
import arrow from '../assets/check.svg'
export const Plan=()=>{
  return (
    <div>
        <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px 40px', textAlign: 'center', paddingTop: '100px',  background: "#f3f3fa" , flexDirection:'column'}}>
            <h1  style={{ margin: '6px 0px',fontSize: '41px', fontWeight: '500'}}>Get the Right Plan for you</h1>
            <p style={{ margin: '6px 0px', fontSize: '14px'}}>Lorem ipsum may be used as a placeholder before the final copy is available</p>
            <div style={{display: 'flex', width:'50rem', justifyContent: 'space-around',  alignItems: 'center', margin:'23px 0px'}}>
                <div style={{ width: '19rem', borderStartStartRadius: '32px'}}>
                    <div style={{margin: '2px 27px',textAlign: 'left'}}>
                    <p style={{background: 'rgb(174 174 214)',padding: '6px 16px',width: '3rem',borderRadius: '34px',color: 'blue'}}>SUPER</p>
                    <p style={{fontSize:'24px', margin: '5px 0px'}}>$1500<span style={{color: '#848484',fontSize: '14px'}}>/Month</span></p>
                    <p style={{color: '#848484',fontSize: '14px', margin: '0px 0px'}}>(Billed Annually)</p>
                    <hr/>
                    <div style={{display:'flex' , margin:'18px 12px'}}>
                        <img src={arrow} alt='Write' style={{borderRadius: '50%', background: 'white'}}></img>
                        <p style={{margin:'0px 19px'}}>6 Month</p>
                    </div>
                    <div style={{display:'flex', margin:'18px 12px'}}>
                        <img src={arrow}alt='Write' style={{borderRadius: '50%', background: 'white'}}></img>
                        <p style={{margin:'0px 19px'}}>Free Recorder Videos</p>
                    </div>
                    <div style={{display:'flex', margin:'18px 12px'}}>
                        <img src={arrow} alt='Write' style={{borderRadius: '50%', background: 'white'}}></img>
                        <p style={{margin:'0px 19px'}}>500 Video Sessions</p>
                    </div>
                    <Button endDecorator={<ArrowCircleRightIcon />} sx={{ backgroundColor: '#5b5bb5', padding: '0.5rem 1.5rem' , margin: '19px 0px'}}>
                        Get Started
                    </Button>
                    </div>
                </div>
                <div style={{width: '19rem', borderStartStartRadius: '32px',background:'#3e3ef9'}}>
                < div style={{margin: '2px 27px',textAlign: 'left'}}>
                    <p style={{background: 'rgb(19 19 175)',padding: '6px 16px',width: '4rem',borderRadius: '34px',color: 'white'}}>Premium</p>
                    <p style={{fontSize:'24px', margin: '5px 0px'}}>$3000<span style={{color: '#848484',fontSize: '14px'}}>/Month</span></p>
                    <p style={{color: '#848484',fontSize: '14px', margin: '0px 0px'}}>(Billed Annually)</p>
                    <hr/>
                    <div style={{display:'flex', margin:'18px 12px'}}>
                        <img src={arrow} alt='Write'style={{borderRadius: '50%', background: 'white'}}></img>
                        <p style={{margin:'0px 19px'}}>6 Month</p>
                    </div>
                    <div style={{display:'flex', margin:'18px 12px'}}>
                        <img src={arrow} alt='Write' style={{borderRadius: '50%', background: 'white'}}></img>
                        <p style={{margin:'0px 19px'}}>Free Recorder Videos</p>
                    </div>
                    <div style={{display:'flex', margin:'18px 12px'}}>
                        <img src={arrow} alt='Write' style={{borderRadius: '50%', background: 'white'}}></img>
                        <p style={{margin:'0px 19px'}}>500 Video Sessions</p>
                    </div>
                    <Button endDecorator={<ArrowCircleRightIcon sx={{borderRadius: '50%'}} />} sx={{ backgroundColor: 'white', padding: '0.5rem 1.5rem', color: 'black', margin: '19px 0px' }}>
                        Get Started
                    </Button>
                    </div>
                </div>
            </div>
        </Box>
    </div>
  )
}
