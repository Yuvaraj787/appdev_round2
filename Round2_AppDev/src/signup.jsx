import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import './App.css';
import Typed from "react-typed";
import {Stack} from '@mui/material';
import {TextField} from '@mui/material';
import Navbar from "./navbar";
function App() {
    const post = () => {
        var mail = document.getElementById("email").value;
        var pass = document.getElementById("pass").value;
        console.log(mail);
        console.log(pass);
        const values = {
            email:mail,
            passw:pass
        }
        fetch("http://localhost:3000/register?email="+mail+"&pass="+pass,
        {
            method: 'POST',
            body: values
        }
        )
    }
   return (
    <>
    <Navbar />
    <Box display="flex" justifyContent="center" alignContent="center">
      <Stack spacing={2} className="container">
        <Typography variant='h4'>
      <Typed strings={["Signup"]} typeSpeed={450} loop />
      </Typography>
      <TextField
      required
          className='i-field'
          id="filled-multiline-flexible"
          label="First name"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
      required
          className='i-field'
          id="filled-multiline-flexible"
          label="Last name"
          multiline
          maxRows={4}
          variant="filled"
        />
      <TextField
      required
          className='i-field'
          id="email"
          label="Email Address"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
      required
          className='i-field'
          id="pass"
          label="Create Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
      required
          className='i-field'
          id="filled-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <Button onClick={post}>Sign Up</Button>
        <Typography>Already have an account ? <a href='/'>Login here</a></Typography>
      </Stack>
      </Box>
      </>
   )
}

export default App
