import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link, withRouter} from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = React.useState(pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction LinkComponent={'a'} href={'/'} label="Home" icon={<HomeIcon />}  />
      <BottomNavigationAction LinkComponent={'a'} href={'/ProfilePage'} label="Profile" icon={<AccountCircleIcon />}   />
    </BottomNavigation>
  );
}