import React from "react";
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from "@mui/material";

/**
 * The LoginHeader component renders a login header with the text "User Login".
 * It centers the text and ensures it takes up the available space.
 * @returns {React.ReactElement} The JSX element representing the login header.
 */
const LoginHeader = () => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="dynamic">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h2"
                        component="a"
                        href="/"
                        sx={{
                            // Ensures it takes up available space for centering
                            flexGrow: 1,

                            // Aligns the text in the center
                            textAlign: "center",

                            // Centers flex items horizontally
                            display: "flex",
                            justifyContent: "center",

                            // Customizes the appearance of the text
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none", // Keep the text decoration if needed
                        }}
                    >
                        User Login
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
    </Box>
);
export default LoginHeader;