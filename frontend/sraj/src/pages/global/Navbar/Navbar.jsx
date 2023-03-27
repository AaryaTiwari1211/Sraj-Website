import React from "react";
import { useState } from "react";
import { Box, Typography, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { borderLeftColor, color } from "@mui/system";

function Navbar() {
    const NavbarItem = ({ text, arrow = false }) => {
        <Box>
            <Typography
                variant="h5"
                fontFamily='Poppins'
                fontWeight='bold'
                textTransform='uppercase'
            >
                {text}
            </Typography>
            {arrow ? <></> : <ArrowDropDownIcon/>}
        </Box>

    }
    return (
        <Box display='flex' justifyContent='center'>

        </Box>
    )
}

export default Navbar