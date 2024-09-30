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
import { Tabs, Tab } from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [value, setValue] = React.useState(0);

  return (
    <AppBar position="static">
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            centered
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
          >
            <Tab label="Home" />
            <Tab label="About Us" />
            <Tab label="Contact Us" />
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
