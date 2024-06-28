import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Button from '@mui/joy/Button';
import girl from "../assets/cntct.png"
export const Contect = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '3px 20rem', textAlign: 'center',justifyContent:'center',borderEndEndRadius: '20px',borderBottomLeftRadius: '20px',position: 'relative',top: '78px',zIndex: '3',background: 'white'
 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1>How Can We help ?</h1>
                    <img src={girl} alt='girl' style={{ width: '15rem' }}></img>
                </div>
                <div style={{ marginLeft: '24px' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1 },
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                            display:'flex',
                            flexDirection:'column',
                            textAlign: 'left'
                          
                        }}
                        noValidate
                        autoComplete="off"
                        
                    >   <div >
                        <FormControl variant="standard" sx={{marginRight:'20px'}}>
                            <InputLabel htmlFor="component-simple">First Name</InputLabel>
                            <Input id="component-simple" defaultValue="Andy" />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                            <Input id="component-simple" defaultValue="Wilson" />
                        </FormControl>
                        </div>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="component-simple">Email Address</InputLabel>
                            <Input id="component-simple" defaultValue="andywilson@gmail.com" />
                        </FormControl>
                        <FormControl variant="standard" sx={{margin: '0'}}>
                            <TextField
                                id="standard-number"
                                label="Phone Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                            /> </FormControl>
                        <FormControl variant="standard" sx={{margin: '0'}}>
                            <TextField
                                 id="standard-multiline-static"
                                 label="Write Your Message Here"
                                 multiline
                                 rows={4}
                                 defaultValue="Message"
                            />
                        </FormControl>
                        <FormControl variant="standard" >
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                defaultValue="Enter Text Here"
                                variant="filled"
                            />
                        </FormControl>
                        <Button endDecorator={<ArrowCircleRightIcon sx={{ borderRadius: '50%' }} />} sx={{ backgroundColor: 'blue', padding: '0.5rem 1.5rem', color: 'white', margin: '19px 0px' , width:'159px'}}>
                            Submit
                        </Button>

                    </Box>
                </div>
            </Box>
        </div>
    )
}
