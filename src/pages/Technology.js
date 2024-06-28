import React from 'react'
import { Box } from '@mui/material'
import industry1 from "../assets/industry1.svg"
import industry2 from "../assets/industry2.svg"
import industry3 from "../assets/industry3.svg"
import tech from '../assets/tech_rt.png'
import top from '../assets/top_bg.png'
import arrow from '../assets/arrw.svg'
export const Technology = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px 170px', textAlign: 'center', paddingTop: '100px' }}>
                <div style={{ display: "flex", flexDirection: 'column', textAlign: 'left', width: '45rem', marginRight: '8rem' }}>
                    <h1 style={{ fontSize: '43px', margin: '10px 0px' }}>Top Technologies</h1>
                    <p style={{ margin: '2px 0px' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual </p>
                    <div>
                        <div style={{ display: "flex", width: '30rem', margin:'18px 23px', boxShadow: '0px 10px 5px #767699', borderRadius: "20px" }}>
                            <div style={{ background: '#a9a9d0',borderRadius: '16px'}}>
                                <img src={industry1} alt='Industry' style={{ height: '55px', margin: '17px 13px' }}></img>
                            </div>
                            <div>
                                <h5 style={{ fontSize: '18px', margin: '8px 12px' }}>Real State</h5>
                                <p style={{ margin: '6px 12px' }}> Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                            </div>
                            <div>
                                <img src={arrow} alt='Arrow' style={{margin: '36px 7px',borderRadius: '50%',padding: '2px 4px',background:'#9999a7'}}></img>
                            </div>
                        </div>
                        <div style={{ display: "flex", width: '30rem', margin:'18px 23px', boxShadow: '0px 10px 5px #767699', borderRadius: "20px"  }}>
                            <div style={{ background: '#a9a9d0',borderRadius: '16px'}}>
                                <img src={industry2} alt='industry' style={{ height: '55px', margin: '17px 13px' }}></img>
                            </div>
                            <div>
                                <h5 style={{ fontSize: '18px', margin: '8px 12px' }}>Real State</h5>
                                <p style={{ margin: '6px 12px' }}> Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                            </div>
                            <div>
                                <img src={arrow} alt='Arrow' style={{margin: '36px 7px',borderRadius: '50%',padding: '2px 4px',background:'#9999a7'}}></img>
                            </div>
                        </div>
                        <div style={{ display: "flex", width: '30rem', margin:'18px 23px', boxShadow: '0px 10px 5px #767699', borderRadius: "20px"  }}>
                            <div style={{ background: '#a9a9d0',borderRadius: '16px'}}>
                                <img src={industry3} alt='industry' style={{ height: '55px', margin: '17px 23px' }}></img>
                            </div>
                            <div>
                                <h5 style={{ fontSize: '18px', margin: '8px 12px' }}>Real State</h5>
                                <p style={{ margin: '6px 12px' }}> Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                            </div>
                            <div> 
                                <img src={arrow} alt='Arrow' style={{margin: '36px 7px',borderRadius: '50%',padding: '2px 4px',background:'#9999a7'}}></img>
                            </div>
                        </div>
                    </div>
                </div>
               
                <img src={top} alt='Technology' style={{height: '31rem'}}></img> 
                <img src={tech} alt='technology' style={{ position: 'absolute', margin: '44rem', borderRadius: '38%', height: '26rem'}}></img>
            </Box>
        </div>
    )
}
