
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from './../../assets/logo.jpg'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

const pages = [
    {
        name: 'Despre Noi',
        route: '/',
    },
    {
        name: 'Resurse',
        route: '/resources',
    },
    {
        name: 'Servicii',
        route: '/services',
    },
    {
        name: 'Catalog Electronic',
        route: '/catalog',
    },
    {
        name: 'Expozitie Virtuala',
        route: '/exposition',
    },
    {
        name: 'Informații Utile',
        route: '/information',
    },
    {
        name: 'Contacte',
        route: '/contact',
    }
]
const settings = ['Logout'];


const AppHeader = () => {


    const navigate = useNavigate();
    const [value1, setactive] = useState("inactive");
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isUserLog, setIsUserLog] = useState(false);
    const storageUser = localStorage.getItem('admin');
    const [user, setUser] = useState({});

    useEffect(() => {
        const parsedUser = JSON.parse(storageUser);
        if (parsedUser?.name) {
            setIsUserLog(true);
            setUser(parsedUser);
        } else setIsUserLog(false);
    }, [storageUser])

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);

    };
    const handleNavLinkClick = route => {

        setAnchorElNav(null);
        return navigate(route);
    }

    const logOut = () => {
        localStorage.removeItem('admin');
        setIsUserLog('false');
        navigate('/login')
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div style={{ padding: "7vh" }}>
            <AppBar position="fixed" >

                <Container maxWidth="xl" >
                    <Toolbar disableGutters >
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} onClick={() => handleNavLinkClick('/')} >
                            <img style={{ width: 80, height: 80, cursor: "pointer" }} src={logo} />
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.route} onClick={() => handleNavLinkClick(page.route)}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }} onClick={() => handleNavLinkClick('/')} >
                            <img style={{ width: 80, height: 80 }} src={logo} />
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (

                                <Button
                                    id={page.route}
                                    key={page.route}
                                    onClick={() => handleNavLinkClick(page.route)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>

                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {
                                isUserLog ? (
                                    <>

                                        <Tooltip title="Open settings">
                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                    <Avatar alt={user?.name} src="/static/images/avatar/2.jpg" />
                                                </IconButton> 
                                        </Tooltip>

                                        <Menu
                                            sx={{ mt: '45px' }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            {settings.map((setting) => (
                                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                    <Typography onClick={logOut} textAlign="center">{setting}</Typography>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </>
                                ) : (
                                    <Button onClick={() => handleNavLinkClick('/login')} x={{ p: 0 }} style={{
                                        color: 'white'
                                    }} variant="text">Log In</Button>
                                )
                            }

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default AppHeader;