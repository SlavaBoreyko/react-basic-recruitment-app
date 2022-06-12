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
import { useLocation } from "react-router-dom"; 

const drawerWidth = 240;

export const LeftNavigation = () => { 
  const locationReact = useLocation().pathname;

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
        {/* MANAGMENT  */}
        <Divider />
        <List sx={{ paddingTop: 6, paddingBottom: 4}} >
          <Typography sx={{ color: '#757575', marginLeft: 5, marginBottom: 1 }}>
            Management
          </Typography>
          <NavigationItem  to={navigationRoutes.dashboard.path} icon={<HomeIcon />} label={'Dashboard'} 
            selected={locationReact === navigationRoutes.dashboard.path}
          />
          <NavigationItem  to={navigationRoutes.sports.path} icon={<SportsSoccerIcon />} label={'Sports'} 
            selected={locationReact === navigationRoutes.sports.path}
          />
          <NavigationItem  to={navigationRoutes.competitions.path} icon={<EmojiEventsIcon />} label={'Competitions'} 
            selected={locationReact === navigationRoutes.competitions.path}
          />
        </List>
        <Divider />

        {/* PLANNING  */}
        <List sx={{ paddingTop: 2, paddingBottom: 4}}>
            <Typography sx={{ color: '#757575', marginLeft: 5, marginBottom: 1 }}>
              Planning
            </Typography>
            <NavigationItem  to={navigationRoutes.scheduling.path} icon={<DateRangeIcon />} label={'Scheduling'} 
              selected={locationReact === navigationRoutes.scheduling.path}
            />
            <NavigationItem  to={navigationRoutes.organisations.path} icon={<CorporateFareIcon />} label={'Organisations'} 
              selected={locationReact === navigationRoutes.organisations.path}
             />
        </List>
        <Divider />

        {/* PEOPLE */}
        <List sx={{ paddingTop: 2, paddingBottom: 4}}>
            <Typography sx={{ color: '#757575', marginLeft: 5, marginBottom: 1 }}>
              People
            </Typography>
            <NavigationItem  to={navigationRoutes.users.path} icon={<SupervisedUserCircleIcon />} label={'Users'} 
              selected={locationReact === navigationRoutes.users.path}
            />
        </List> 
        
        {/* Box occupies a free place with bgcolor */}
        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.paper', p: 3 }}
        />
      </Drawer>
    </>
  );
};
