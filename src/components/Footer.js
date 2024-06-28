import React from 'react'
import Box from "@mui/material/Box"
import { Button } from '@mui/material'
import download from '../assets/play.png'
import fb from '../assets/fb.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import insta from '../assets/insta.svg'
import youtube from '../assets/youtube.svg'
export const Footer = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '23px 1rem', justifyContent: 'center', background: 'black' , color:'white', textAlign:"left", height:"23rem"}}>
                <div style={{margin: '0px 58px', width: '319px'}}>
                    <h3 style={{fontSize: '30px', margin: '0px',fontWeight: '400'}}>BizPrep</h3>
                    <p style={{fontSize:'11px'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual</p>
                    <h3>Download on:</h3>
                    <img src={download} alt='download'></img>
                </div>
                <div style={{margin: '0px 58px', width: '319px', height: '234px'}}>
                    <h3>Ouick Links</h3>
                    <p style={{fontSize:'11px'}}>About Us</p>
                    <p style={{fontSize:'11px'}}>Terms & Conditions</p>
                    <p style={{fontSize:'11px'}}>Privacy Policy</p>
                </div>
                <div style={{margin: '0px 58px', width: '319px', height: '236px'}}>
                    <h3>Contect Us</h3>
                    <p style={{fontSize:'11px'}}>1800-31-0000</p>
                    <p style={{fontSize:'11px'}}>hello@bizprep.com</p>
                </div>
                <div style={{margin: '0px 58px', width: '319px'}}>
                    <h3>Subscribe Us</h3>
                    <p style={{fontSize:'11px'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual</p>
                    <input style={{ border: '2px solid white',  borderStartStartRadius: '10px', borderEndStartRadius: '10px', height: '25px',  width: '11rem', padding: '0px 6px'}} placeholder='Enter Email'></input>
                    <Button style={{background: 'blue', color: 'white',borderEndEndRadius: '10px',borderStartEndRadius: '10px', height: '28px'}}>Send</Button>
                    <p style={{fontSize:'11px', color: 'blue'}}>Your email ID is Confidential.</p>
                    <p style={{fontSize:'11px'}}>Connect Us on social media</p>
                    <img src={fb} alt='facebook' style={{height: '17px',width: '17px', padding: '5px 4px', marginRight:'11px'}}></img>
                    <img src={twitter} alt='twitter' style={{height: '17px',width: '17px', padding: '5px 4px', marginRight:'11px'}}></img>
                    <img src={linkedin} alt='linkedin' style={{height: '17px',width: '17px', padding: '5px 4px', marginRight:'11px'}}></img>
                    <img src={insta} alt='Insta' style={{height: '17px',width: '17px', padding: '5px 4px', marginRight:'11px'}}></img>
                    <img src={youtube} alt='youtube' style={{height: '17px',width: '17px', padding: '5px 4px', marginRight:'11px'}}></img>
                </div>
            </Box>
        </div>
    )
}
