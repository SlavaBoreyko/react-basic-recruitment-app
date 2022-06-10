import { Link } from "react-router-dom";
import { navigationRoutes } from "../../navigationRoutes";
import {NavigationItem} from '../LeftNavigation/NavigationItem'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';



const drawerWidth = 240;

export const LeftNavigation = () => {
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'fixed',
            top: '4rem'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <Divider />
        <List sx={{ paddingTop: 6, paddingBottom: 4}}>
          <Typography sx={{ color: '#757575', marginLeft: 5, marginBottom: 1 }}>
            Management
          </Typography>
          <NavigationItem  to={navigationRoutes.dashboard.path} icon={<HomeIcon />} label={'Dashboard'} />
          <NavigationItem  to={'#'} icon={<SportsSoccerIcon />} label={'Sports'} />
          <NavigationItem  to={'#'} icon={<EmojiEventsIcon />} label={'Competitions'} />
        </List>
        <Divider />

        <List sx={{ paddingTop: 2, paddingBottom: 4}}>
            <Typography sx={{ color: '#757575', marginLeft: 5, marginBottom: 1 }}>
              Planning
            </Typography>
            <NavigationItem  to={navigationRoutes.dashboard.path} icon={<HomeIcon />} label={'Scheduling'} />
            <NavigationItem  to={'#'} icon={<SportsSoccerIcon />} label={'Organisations'} />
        </List>
        <Divider />

        <List sx={{ paddingTop: 2, paddingBottom: 4}}>
            <Typography sx={{ color: '#757575', marginLeft: 5, marginBottom: 1 }}>
              People
            </Typography>
            <NavigationItem  to={'#'} icon={<SportsSoccerIcon />} label={'Users'} />
        </List>

        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        />
      </Drawer>

     

      {/* <p>Management</p>
      <Link to={navigationRoutes.dashboard.path}>Dashboard</Link>
      <Link to={""}>Sports</Link>
      <Link to={""}>Competitions</Link>
      <Divider />
      <p>Planning</p>
      <Link to={""}>Scheduling</Link>
      <Link to={""}>Organisations</Link>
      <Divider />
      <p>People</p>
      <Link to={""}>Scheduling</Link>
      <Link to={""}>Organisations</Link> */}
    </>
  );
};
