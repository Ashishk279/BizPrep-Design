import { Box } from '@mui/material'
import React from 'react'
import profile from '../assets/user.png'
import hr from '../assets/polygon.svg'
import left from '../assets/left.svg'
import right from '../assets/right.svg'
export const About = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'center', margin: '2px 170px', textAlign: 'center' }}>
                <h1 style={{fontSize: '41px',width: '36rem', fontWeight: '400', margin: '2px 0px' }}>Our most satisfied Customer says About us</h1>
                <p style={{fontSize: '16px',margin: '4px 0px'}}> Let's hear what our partners have to say about us!</p>
                <img src={profile} alt='profile' style={{height: '116px',marginTop: '35px', border: '8px solid #f4e4e4', borderRadius: '50%'}}></img>
                <h4 style={{margin: '12px 0px',fontSize: '23px'}}>Lucy Aprilla</h4>
                <p style={{fontSize: '16px',margin: '1px 0px'}}>Senior doctor at Bajigut.us</p>
                
                <img src={hr} alt='Hr'></img>
                <hr style={{color: 'black', height: '1px', width: '58rem', background: 'black', marginTop: '0px', marginLeft:'10rem'}}/>
                <div style={{display:'flex', width: '62rem'}}>
                    <img src={left} alt='left' style={{margin: '7px 5px', height: '45px'}}></img>
                  
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available  a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
                    <img src={right} alt='right' style={{ marginTop: '66px', position: 'absolute', height: '45px', marginLeft: '62rem'}}></img>
                    
                </div>
            </Box>
        </div>
    )
}
