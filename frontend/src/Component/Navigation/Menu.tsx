import { BookmarkAddRounded, Home, Info, LoginOutlined, LoginRounded, Logout, NotificationsNoneRounded, People, Settings, Work, WorkOffRounded } from "@mui/icons-material";
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useState, MouseEvent, useEffect, useContext } from "react";
import Login from "../Forms/Login";
import { useNavigate } from "react-router-dom";
import { IsLoginContext } from "../../Context/IsLoginContext";

export default function XMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    //const [isLogin,setIsLogin]=useState(false);
    const {isLogin,setIsLogin}=useContext(IsLoginContext);
    const open = Boolean(anchorEl);
    const navigate=useNavigate();
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setIsLogin(true);
        }
    },[isLogin])

    return (
        <>
            <IconButton
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={()=>{navigate("/");setAnchorEl(null)}}>
                     <ListItemIcon>
                        <Home fontSize="small" />
                    </ListItemIcon>
                    Home
                </MenuItem>
                {
                    isLogin?
                    <MenuItem onClick={()=>{navigate("/complaint");setAnchorEl(null)}}>
                     <ListItemIcon>
                        <BookmarkAddRounded fontSize="small" />
                    </ListItemIcon>
                    Complaints
                </MenuItem>:<></>
                }
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                        <Info fontSize="small" />
                    </ListItemIcon>
                    About
                </MenuItem>
                <MenuItem onClick={()=>{navigate("/projects");setAnchorEl(null)}}>
                    <ListItemIcon>
                        <Work fontSize="small" />
                    </ListItemIcon>
                    Project's
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                        <NotificationsNoneRounded fontSize="small" />
                    </ListItemIcon>
                    Notice's
                </MenuItem>
                <Divider/>
                <MenuItem onClick={()=>{navigate("/members");setAnchorEl(null)}}>
                 <ListItemIcon>
                 <People fontSize="small"/> 
                 </ListItemIcon>
                    Members
                </MenuItem>
                <Divider/>
                
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                {
                    isLogin?
                    <MenuItem onClick={()=>{localStorage.clear();setIsLogin(false);navigate("/login"); setAnchorEl(null)}}>
                    <ListItemIcon>
                        <LoginRounded fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
                    :
                    <MenuItem onClick={()=>{navigate("/login"); setAnchorEl(null)}}>
                    <ListItemIcon>
                        <LoginRounded fontSize="small" />
                    </ListItemIcon>
                    Login
                </MenuItem>
                }
            </Menu>
        </>
    );
}
