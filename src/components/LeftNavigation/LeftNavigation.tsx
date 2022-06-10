import React from "react";
import { navigationRoutes } from "../../navigationRoutes";
import { NavigationItem } from '../LeftNavigation/NavigationItem'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';




const drawerWidth = 240;

export const LeftNavigation = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (e: any, index:number) => {
    setSelectedIndex(index);
  };

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
        <List sx={{ paddingTop: 6, paddingBottom: 4}} >
          <Typography sx={{ color: '#757575', marginLeft: 5, marginBottom: 1 }}>
            Management
          </Typography>
          <NavigationItem  to={navigationRoutes.dashboard.path} icon={<HomeIcon />} label={'Dashboard'} 
            selected={selectedIndex === 0}
            onClick={(e) => handleListItemClick(e, 0)}
          />
          <NavigationItem  to={navigationRoutes.sports.path} icon={<SportsSoccerIcon />} label={'Sports'} 
            selected={selectedIndex === 1}
            onClick={(e) => handleListItemClick(e, 1)}
          />
          <NavigationItem  to={navigationRoutes.competitions.path} icon={<EmojiEventsIcon />} label={'Competitions'} 
            selected={selectedIndex === 2}
            onClick={(e) => handleListItemClick(e, 2)}
          />
        </List>
        <Divider />

        <List sx={{ paddingTop: 2, paddingBottom: 4}}>
            <Typography sx={{ color: '#757575', marginLeft: 5, marginBottom: 1 }}>
              Planning
            </Typography>
            <NavigationItem  to={navigationRoutes.scheduling.path} icon={<DateRangeIcon />} label={'Scheduling'} 
              selected={selectedIndex === 3}
              onClick={(e) => handleListItemClick(e, 3)}
            />
            <NavigationItem  to={navigationRoutes.organisations.path} icon={<CorporateFareIcon />} label={'Organisations'} 
              selected={selectedIndex === 4}
              onClick={(e) => handleListItemClick(e, 4)}
            />
        </List>
        <Divider />

        <List sx={{ paddingTop: 2, paddingBottom: 4}}>
            <Typography sx={{ color: '#757575', marginLeft: 5, marginBottom: 1 }}>
              People
            </Typography>
            <NavigationItem  to={navigationRoutes.users.path} icon={<SupervisedUserCircleIcon />} label={'Users'} 
              selected={selectedIndex === 5}
              onClick={(e) => handleListItemClick(e, 5)}
            />
        </List>

        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.paper', p: 3 }}
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
