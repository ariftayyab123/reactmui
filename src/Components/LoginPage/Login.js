import React from 'react';
import {
    Typography,
    Button,
    TextField,
    FormGroup,
    FormControl,
    FormControlLabel,
    Checkbox,
    InputLabel,
    Select,
    MenuItem,
    Card
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
        CheckIt: false,
        age: 0,
    });

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

    return (
        <>
            {/* Optional heading with customizable styles */}
            {/* <Typography variant="h1" align="center" color="red" sx={{ border: '1px solid black', borderRadius: '10px' }}>
                The Test Form!
            </Typography> */}
            <Card sx={{maxWidth: "100%", minHeight: "100px", align: 'center',  padding: '10px', paddingRight: '20px'}}> 
            <div>
                <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit} align="center">
                    <TextField
                        name="name"
                        value={inputs.name}
                        placeholder="Enter Name"
                        variant="outlined"
                        type="text"
                        onChange={handleChange}
                        sx={{ m: 3, border: '2px solid black', borderRadius: '10px' }}
                    />

                    <TextField
                        name="email"
                        value={inputs.email}
                        placeholder="Enter Email"
                        variant="outlined"
                        type="email"
                        onChange={handleChange}
                        sx={{ m: 3, border: '2px solid black', borderRadius: '10px' }}
                    />

                    <TextField
                        name="password"
                        value={inputs.password}
                        placeholder="Enter Password"
                        variant="outlined"
                        type="password"
                        onChange={handleChange}
                        sx={{ m: 3, border: '2px solid black', borderRadius: '10px' }}
                    />

                    <TextField
                        placeholder="Address"
                        type="text"
                        variant="outlined"
                        sx={{ m: 3, border: '2px solid black', borderRadius: '10px' }}
                    />

                   

                    <FormControl fullWidth="false" sx={{ m: 3, borderRadius: '10px' }}>
                        <InputLabel>Age</InputLabel>
                        <Select
                            name="age"
                            value={inputs.age}
                            label="Age"
                            onChange={handleChange}
                            variant='outlined'
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={inputs.CheckIt}
                                    onChange={() => setInputs((prev) => ({
                                        ...prev,
                                        CheckIt: !inputs.CheckIt
                                    }))}
                                />
                            }
                            label="Remember Me"
                        />
                    </FormGroup>

                    <Button type="submit" variant="contained"
                        color='success' sx={{ m: 3 }}>Submit</Button>
                </form>
            </div>
            <div>
                <Typography variant="h5" align="center" color="grey" sx={{ mt: 2 }}>
                    {`Welcome ${inputs.name}!`}
                </Typography>

            </div>
            </Card>
        </>
    );
};

export default Test;
