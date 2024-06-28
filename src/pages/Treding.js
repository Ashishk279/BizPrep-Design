import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material'
import medical from '../assets/trend_1.png'
import rec6 from '../assets/trend_2.png'
import rec5 from '../assets/trend_13.png'

export const Trending = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>
      <Box sx={{ alignItems: 'center', margin: '20px 170px', textAlign: 'center', paddingTop: '100px' }}>
        <h1 style={{fontSize: '42px',textAlign: 'center', fontWeight: 'normal', margin: '9px 23px'}}>Trending Sessions</h1>
        <p>Simple text for the trending industries that are help to grow the people</p>

        <div className="slider-container">
          <div
            style={{
              width: "73rem",
              display: "block"
            }}
          >
            <Slider {...settings}>
              <div >
                <div style={{ margin: '33px 23px', textAlign: 'left', width: '20.5rem' }}>
                  <img src={medical} alt='Medical'></img>
                  <h2 style={{margin: '10px 0px'}}>Medical</h2>
                  <p style={{margin: '10px 0px'}}>This is Medical trending page</p>
                </div>

              </div>
              <div  >
                <div style={{ margin: '33px 23px', textAlign: 'left' , width: '20.5rem'}}>
                  <img src={rec5} alt=''></img>
                  <h2 style={{margin: '10px 0px'}}>Technology</h2>
                  <p style={{margin: '10px 0px'}}>This is Technology trending page</p>
                </div>
              </div>
              <div>
                <div  style={{ margin: '33px 23px', textAlign: 'left', width: '20.5rem' }}>
                  <img src={rec6} alt=''></img>
                  <h2 style={{margin: '10px 0px'}}>Real State</h2>
                  <p style={{margin: '10px 0px'}}>This is Real State trending page</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </Box>
    </div>
  )
}
