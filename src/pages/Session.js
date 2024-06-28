import { Box } from '@mui/material'
import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Button from '@mui/joy/Button';
import girl from '../assets/girl.png'
import background from '../assets/bg.svg'
import dots from '../assets/dots.svg'
import curv from '../assets/curv.svg'
export const Session = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '80px 170px', textAlign: 'center' }}>
                <img src={background} alt='background' ></img>
                <div style={{ position: 'absolute', textAlign: 'left', margin: '0px 44px', width: '31rem' }}>
                    <h1 style={{ color: 'white', margin: '5px 0px', fontSize: '49px' }}>Join Live Sessions</h1>
                    <p style={{ color: 'white', margin: '0px', fontSize: '22px' }}>We got you recovered. Let us know! Which industry you are interested?</p>
                    <Button endDecorator={<ArrowCircleRightIcon sx={{ borderRadius: '50%' }} />} sx={{ backgroundColor: 'white', padding: '0.5rem 1.5rem', color: 'black', margin: '19px 0px' }}>
                        Apply Online
                    </Button>
                </div>
                <img src={dots} alt='girl' style={{ position: 'absolute', marginLeft: '25rem', marginTop: '10rem' }}></img>

                <img src={curv} alt='girl' style={{ position: 'absolute', marginTop: '47px', marginLeft: '571px' }}></img>
                <img src={girl} alt='girl' style={{ position: 'absolute', marginBottom: '84px', marginLeft: '52rem' }}></img>
            </Box>
        </div>
    )
}
