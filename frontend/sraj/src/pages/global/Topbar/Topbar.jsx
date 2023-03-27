import React from "react";
import './Topbar.css'
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from "react";
import { Box, Typography, TextField, InputBase } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import { borderLeftColor, color } from "@mui/system";

const IconTextField = ({ iconStart, iconEnd, InputProps, placeholder, ...props }) => {
    return (
        <TextField
            {...props}
            placeholder={placeholder}
            sx={{
                width: 300
            }}
            InputProps={{
                ...InputProps,
                startAdornment: iconStart ? (
                    <InputAdornment position="start">{iconStart}</InputAdornment>
                ) : null,
                endAdornment: iconEnd ? (
                    <InputAdornment position="end">{iconEnd}</InputAdornment>
                ) : null,
                height: 10,
            }}
        />
    );
};

function Topbar() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const Mobile = useMediaQuery('(max-width:800px)')
    const MUIhover = {
        cursor: 'pointer',
        '&': {
            transition: 'all 0.2s'
        },
        "&:hover": { color: "red" }
    }
    return (
        <Box display="flex" justifyContent="space-between" m='20px' alignItems='center'>
            <Box display='flex' alignItems='center'>
                {Mobile ? <MenuIcon
                    sx={{
                        p: '10px',
                        cursor: 'pointer',
                        mr: '20px',
                    }}
                /> : <></>}
                <img
                    src="https://3.bp.blogspot.com/-vjVJV9BgIdM/V9jnjb3HN3I/AAAAAAAB4u8/PtKS0ZaRMGUDDi_DmMExuHvCh8WhIFPLQCLcB/s1600/VOTY_logo.jpg"
                    alt="Logo"
                    style={{
                        width: "80px",
                        height: "50px",
                    }}
                />
                {Mobile ? <SearchIcon
                    sx={{
                        p: '20px',
                        cursor: 'pointer',
                        mr: '20px',
                    }}
                /> : <></>}
            </Box>
            <Box>
                {!Mobile ? <IconTextField
                    placeholder='Search'
                    variant='standard'
                    iconEnd={<SearchIcon
                        sx={{
                            cursor: 'pointer',
                            color: 'red'
                        }}
                    />}
                /> : <></>}
            </Box>
            <Box display='flex' gap='20px' mr='10px'>
                <Box>
                    <PersonIcon sx={MUIhover} />
                </Box>
                <Box>
                    <FavoriteIcon sx={MUIhover} />
                </Box>
                <Box>
                    <ShoppingBagIcon sx={MUIhover} />
                </Box>
            </Box>
        </Box>
    );
}

export default Topbar;
