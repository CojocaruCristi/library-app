import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';


const defaultTheme = createTheme();

export default function SignIn() {
    const [isLoading, setIsLoading] = React.useState(false);
    const navigate = useNavigate();
    const [isSnakOpen, setIsSnakOpen] = React.useState(false);


      const handleClick = () => () => {
        setIsSnakOpen(true);
      };
    
      const handleClose = () => {
        setIsSnakOpen(false);
      };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    
    setIsLoading(true);
    const response = await fetch(`https://library-api-z8qo.onrender.com/api/authenticate`, {
    // const response = await fetch(`http://localhost:5000/api/authenticate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
          }),
    });

    const data = await response.json();

    setIsLoading(false);


    if(data.status === 'success') {
        localStorage.setItem('admin', JSON.stringify(data.data.user));
        navigate('/catalog');
    }else {
        setIsSnakOpen(true);
    }

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
      <Snackbar
        anchorOrigin={{  vertical: 'top',
        horizontal: 'right', }}
        open={isSnakOpen}
        onClose={handleClose}
        message="Email sau parola au fost introduse gresit!"
        // key={vertical + horizontal}
        />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {
                isLoading ? (
                    <LoadingButton loading variant="outlined">
                        Submit
                    </LoadingButton>
                )
                : 
                (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
                )
            }
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}