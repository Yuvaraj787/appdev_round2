import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button } from '@mui/material';
import { useState } from 'react';

function Navbar() {
    const [location,setLocation] = useState("Fetching Location");
    const [points,setpoints] = useState([]);
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          setpoints(position.coords.latitude,position.coords.longitude);
      fetch("https://api.geoapify.com/v1/geocode/reverse?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&apiKey=423764442204456e867fcff5465e4454", requestOptions)
      .then(response => response.json())
      .then(result => setLocation(result.features[0].properties.name))
      .catch(error => console.log('error', error));
        });
      }

    var requestOptions = {
        method: 'GET',
      };
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News Headlines
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Location : {location}
          </Typography>
          <Button color="inherit"><a href="/content" style={{textDecoration:"none",color:"White"}}>Refresh Contents</a></Button>
          <Button color="inherit"><a href="/" style={{textDecoration:"none",color:"White"}}>SignUp</a></Button>
          <Button color="inherit"><a href="/" style={{textDecoration:"none",color:"White"}}>Login</a></Button>
        </Toolbar>
        </AppBar>
          </Box>
    )
}
export default Navbar;