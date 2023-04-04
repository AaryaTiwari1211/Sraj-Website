import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { Box, IconButton, Typography, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { borderLeftColor, color } from "@mui/system";


const NavbarItem = ({ text, arrow = false, color = 'black', to }) => {
    return (
        <Link
            to={to}
            style={{
                textDecoration: 'none',
            }}
        >
            <Box display='flex' alignItems='center'>
                <Typography
                    variant="h6"
                    fontSize='14px'
                    letterSpacing='2px'
                    fontFamily='Poppins'
                    color={color}
                    fontWeight='bold'
                    textTransform='uppercase'
                    sx={{
                        '&': {
                            transition: 'all 0.2s ease-in-out',
                        },
                        '&:hover': {
                            color: 'red',
                        }
                    }}
                >
                    {text}
                </Typography>
                {
                    !arrow ? <></> :
                        <IconButton
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                }
                            }}
                        >
                            <ArrowDropDownIcon />
                        </IconButton>
                }
            </Box>
        </Link>
    )
}

function Navbar() {
    // const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width: 1300px)');
    return (
            !isMobile && (<Box
            display = 'flex'
            flexDirection = 'row'
            justifyContent = 'center'
            alignItems = 'center'
            sx = {{
                borderTop: '1px solid #e0e0e0',
                borderBottom: '1px solid #e0e0e0',
            }}
        >
            <Box margin='10px 20px'>
                <NavbarItem text='New Arrivals' to={'new-arrivals'} arrow={true} />
            </Box>
            <Box
                margin='10px 20px'
            >
                <NavbarItem text='Dresses' to={'/dresses'} arrow={true} />
            </Box>
            <Box
                margin='10px 20px'
            >
                <NavbarItem text='Kurta And Suit Sets' to={'/kurtas'} arrow={true} />
            </Box>
            <Box
                margin='10px 20px'
            >
                <NavbarItem text='Lehenga Sets' to={'/lehengas'} />
            </Box>
            <Box
                margin='10px 20px'
            >
                <NavbarItem text='Sarees' to={'/sarees'} />
            </Box>
            <Box
                margin='10px 20px'
            >
                <NavbarItem text='Jewellery' to={'/jewellery'} />
            </Box>
            <Box
                margin='10px 20px'
            >
                <NavbarItem text='Nightwear' to={'/nightwear'} />
            </Box>
            <Box
                margin='10px 20px'
            >
                <NavbarItem text='Bed linen' to={'/bed-linen'} />
            </Box>
            <Box
                margin='10px 20px'
            >
                <NavbarItem text='juttis' to={'/juttis'} />
            </Box>
            <Box
                margin='10px 20px'
            >
                <NavbarItem text='Sale' color='red' to={'/sale'} />
            </Box>
        </Box >)
    )
}

export default Navbar