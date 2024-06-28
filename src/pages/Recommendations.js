import React from 'react'
import { Box } from '@mui/material'
import medical from "../assets/trend_1.png"
import technology from "../assets/trend_2.png"
export const Recommendations = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px 120px', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '40px 0px' }}>
                    <div style={{ textAlign: 'left', marginRight: '56px' }}>
                        <h1 style={{ fontSize: '44px', fontWeight: '500' }}>Recommendation Sessions for you</h1>
                        <p style={{ color: 'gray' }}> Lorem Ipsum placeholder text for use in your graphic, print and web layouts.</p>
                        <div style={{display:'flex'}}>
                            <p style={{fontSize: '76px', margin: '0px 12px', color: '#3131a7'}}>&larr;</p>
                            <p style={{fontSize: '76px', margin: '0px 12px', color: '#3131a7'}}>&rarr;</p>
                        </div>

                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <img src={medical} alt='arrow'></img>
                        <h2 style={{margin: '3px 0px'}}>Medical</h2>
                        <p> Lorem Ipsum placeholder text for use in your graphic, print and web layouts. </p>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <img src={technology} alt='arrow'></img>
                        <h2 style={{margin: '3px 0px'}}>Technology</h2>
                        <p> Lorem Ipsum placeholder text for use in your graphic, print and web layouts. </p>
                    </div>
                </div>

            </Box>
        </div>
    )
}
