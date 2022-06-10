/*
  icon for 'user avatar' can be found here: https://mui.com/material-ui/material-icons/
 */

import { AppBar, ListItemSecondaryAction, Toolbar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { flexbox } from "@mui/system";


export const TopBar = () => {
    return <div>
      <AppBar position="static" sx={{ bgcolor: 'secondary.main'}}>  
        <Toolbar 
          sx={{ justifyContent: "space-between" }}
        >
        <img src='/logo.svg' alt="logo" height={40}/>
        <div style={{  display: "flex", alignItems: "center" }}>
          <ToggleOffIcon sx={{ fontSize: 40 }} />
          <SettingsIcon  />
          <AccountCircleIcon fontSize='large' sx={{ marginLeft: 2 }}/>
        </div>
        </Toolbar>
      </AppBar>
      

    </div>
}