import React from 'react';
import LoginHeader from '../Headers/LoginHeader';
import ResponsiveAppBar from '../Headers/NavBar';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import {
    Typography,
    Button,
    TextField,
    Box,
} from '@mui/material';

/**
 * This component renders a form with input fields for name, email, and password,
 * a checkbox, and a select field for age. Upon form submission, it logs the current state of inputs.
 * @returns {React.ReactElement} The JSX element representing the Test form.
 */
const Test = () => {
    const [inputs, setInputs] = React.useState({
        name: "",
        email: "",
        password: "",
    });
    const [isSignUp, setIsSignUp] = React.useState(false);
    console.log(isSignUp)

    /**
     * Handles input field changes and updates the component state.
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event of the input field.
     */
    const handleChange = (event) => {
        setInputs((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    /**
     * Handles form submission, prevents default behavior, and logs the input data.
     * @param {React.FormEvent<HTMLFormElement>} event - The submit event of the form.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    };

    const resetState = (e) => {
        setIsSignUp(!isSignUp);
        setInputs({
            name: "",
            email: "",
            password: "",
        })
    }
    return (
        <>

             <ResponsiveAppBar />
            <div>
                <form onSubmit={handleSubmit}>
                    <Box display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        maxWidth={400}
                        m="auto"
                        mt={5}
                        p={3}
                        borderRadius={5}
                        boxShadow={"5px 5px 10px #ccc"}

                        sx={{
                            ":hover": {
                                boxShadow: "10px 10px 20px #ccc",
                            }
                        }}
                    >
                        <Typography
                            variant='h3'
                            padding={{ xs: 1, sm: 2, md: 3 }}
                            textAlign={"center"}
                            color='primary'

                        >
                            {isSignUp ? "Sign Up" : "Login"}
                        </Typography>
                        {isSignUp && <TextField
                            onChange={handleChange}
                            name='name'
                            value={inputs.name}
                            margin='normal'
                            type='text'
                            variant='outlined'
                            placeholder='Name'
                        />}
                        <TextField
                            onChange={handleChange}
                            name='email'
                            value={inputs.email}
                            margin='normal'
                            type='email'
                            variant='outlined'
                            placeholder='Email'
                        />
                        <TextField
                            onChange={handleChange}
                            name='password'
                            value={inputs.password}
                            margin='normal'
                            type='password'
                            variant='outlined'
                            placeholder='Password'
                        />

                        <Button 
                        endIcon={
                        isSignUp? <HowToRegOutlinedIcon/> : <LoginOutlinedIcon />}
                            type='submit'
                            sx={{ marginTop: 2, borderRadius: 2 }}
                            variant='contained'
                            color='warning'
                        >
                            {isSignUp ? "Sign Up" : "Login"}
                        </Button>
                        <Typography margin={2}
                            textAlign={"center"}
                            color='primary'
                            variant='h7'
                            textOverflow={"ellipsis"}
                            top={"10px"}
                        >
                            {isSignUp ? "Already have an account?" : "Don't have an account?"}
                        </Typography>


                        <Button endIcon={isSignUp ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />}

                            onClick={resetState}
                            sx={{ borderRadius: 2, textEmphasis: 'bold' }}
                            variant='contained'
                            color='primary'
                            textAlign={"center"}

                        >
                            {isSignUp ? "Login" : "Sign Up"}
                        </Button>
                    </Box>
                </form>
            </div>

        </>
    );
};

export default Test;
