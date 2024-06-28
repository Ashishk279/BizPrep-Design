import React from 'react'
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Dropdown from '@mui/joy/Dropdown';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import MenuButton from '@mui/joy/MenuButton';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import logo from '../assets/logo.png'
import bell from '../assets/bell.svg'
import avatar from '../assets/elps3.png'
export const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <nav style={{boxShadow:'0px 13px 10px #f8f8f8'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px 170px', textAlign: 'center'}}>
                <div>
                    <img className='logo' src={logo} alt='Logo' style={{ height: '10vh', marginRight: '54px' }} ></img>
                </div>
                <div>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Typography sx={{ minWidth: 100 }}>Home</Typography>
                        <Dropdown >
                            <MenuButton endDecorator={<ArrowDropDown />} 
                                sx={{ border: 'none' }} 
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>Industries</MenuButton>
                            <Menu sx={{ minWidth: 160, '--ListItemDecorator-size': '24px', border: 'none' }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}>
                                <MenuItem onClick={handleClose}>
                                    Medical
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Technology
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Real State
                                </MenuItem>

                            </Menu>
                        </Dropdown>
                        <Typography sx={{ minWidth: 100 }}>Sessions</Typography>
                    </Box>
                </div>
                <div>
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" style={{ padding: '6px 30px', margin: '0px 25px' }}>Login</Button>
                        <Button variant="contained" style={{ padding: '6px 30px', margin: '0px 25px' }}>Register</Button>
                    </Stack>
                </div>
                <div>
                    <img src={bell} alt='Bell' style={{ margin: '0px 25px' }}></img>
                </div>
                <div>
                <Avatar src={avatar}></Avatar>
                </div>
                <div>
                    <Dropdown>
                        <MenuButton endDecorator={<ArrowDropDown />} sx={{ border: 'none', padding: '2px 0px', margin: '0px 18px', fontSize: "11px" }}>Onoriode Osuagwu</MenuButton>
                        <Menu sx={{ minWidth: 160, '--ListItemDecorator-size': '24px' }}>
                            <MenuItem>
                                Smaller
                            </MenuItem>
                            <MenuItem>
                                Larger
                            </MenuItem>

                        </Menu>
                    </Dropdown>
                </div>
            </Box>

        </nav>
    )
}
