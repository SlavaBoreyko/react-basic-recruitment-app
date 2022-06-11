import { useEffect, useState } from "react";
import { AppBar, Toolbar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Switch from '@mui/material/Switch';


export const TopBar = ({toggleTheme}: any) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if(checked) {
      toggleTheme('dark')
    } else {
      toggleTheme('light')
    }
  },[checked, toggleTheme])

  return <div>
    <AppBar position="fixed" sx={{ bgcolor: 'secondary.main'}}>  
      <Toolbar 
        sx={{ justifyContent: "space-between" }}
      >
        <img src='/logo.svg' alt="logo" height={40}/>
        <div style={{  display: "flex", alignItems: "center" }}>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <SettingsIcon />
          <AccountCircleIcon fontSize='large' sx={{ marginLeft: 2 }}/>
        </div>
      </Toolbar>
    </AppBar>
  </div>
}