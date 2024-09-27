import React from 'react';
import { Typography, Button, List, TextField } from '@mui/material';
/**
 * This component renders a page with a heading and a list of buttons.
 * The buttons are examples of the different types of buttons that can be used in MUI.
 * Each button has a different color and a different action when clicked.
 * @returns {React.ReactElement} The JSX element representing the component.
 */
const Test = () => (
    <Typography variant="h1" align="center" color="red" sx={{ border: '1px solid black', borderRadius: '10px' }}>
        Hello World
        <List>
        <TextField placeholder='Enter Name' variant='outlined' type='text' sx={{ m: 3, border: '2px solid black', borderRadius: '10px'}} />
        <TextField placeholder='Enter Phone Number' variant='filled' type='numeric' size='small' sx={{m: 3, border: '2px solid black', borderRadius: '10px'}} />
        <TextField placeholder='Enter Email' variant='standard' type='email' sx={{m: 3, border: '2px solid black', borderRadius: '10px'}}/>
        <TextField placeholder='Enter Password' variant='outlined' type='password' sx={{m: 3, border: '2px solid black', borderRadius: '10px'}}/>
        <TextField placeholder='Address' variant='standard' type='text' sx={{m: 3, border: '2px solid black', borderRadius: '13px'}} />
        </List>
        <List>
            {/* Primary button with primary action. When clicked, it alerts the user with a message. */}
            <Button
                variant="contained"
                color="primary"
                onClick={() => alert('Hello World')}
                sx={{ m: 3, border: '2px solid black', borderRadius: '10px' }}>
                Get Started
            </Button>
            {/* Error button with error action. When clicked, it alerts the user with an error message. */}
            <Button
                variant="contained"
                color="error"
                onClick={() => alert('Error')}
                sx={{ m: 3, border: '2px solid black', borderRadius: '10px' }}>
                Stop
            </Button>
            {/* Warning button with warning action. When clicked, it alerts the user with a warning message. */}
            <Button
                variant="outlined"
                color="warning"
                onClick={() => alert('Warning')}
                sx={{ m: 3, border: '2px solid black', borderRadius: '10px' }}>
                Warning
            </Button>
            {/* Info button with info action. When clicked, it alerts the user with an info message. */}
            <Button
                variant="outlined"
                color="info"
                onClick={() => alert('Info')}
                sx={{ m: 3, border: '2px solid black', borderRadius: '10px' }}>
                Info
            </Button>
            {/* Secondary button with secondary action. When clicked, it alerts the user with a message. */}
            <Button
                variant="contained"
                color="secondary"
                onClick={() => alert('Secondary')}
                sx={{ m: 3, border: '2px solid black', borderRadius: '10px' }}>
                Secondary
            </Button>
        </List>
    </Typography>
);

export default Test;