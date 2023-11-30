import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ImageUploadBox from '../AI/AiInput'
import MenuList from '../AI/MenuList';

function AiInterior() {
  const [menu, setMenu] = React.useState('');
  const handleChange = (event) => {
    setMenu(event.target.value);
  };


  return (
    <>
      <Paper elevation={3} sx={{ marginY: 5, marginX: 8, padding: 5, backgroundColor: "#28296b" }} >
        <Box>
          <Typography variant='h6' color="white">
            Upload a photo or image
          </Typography>
          <Typography variant='h6' color='lightgrey'>
            Upload a photo or image of room whose appearance you want to improve
          </Typography>
        </Box>
        <Button variant="contained" endIcon={<AutoAwesomeIcon />}>
          Design this room
        </Button>
      </Paper>

      {/* <Box sx={{ display: 'flex', marginLeft: '60px' }}>
        <FormControl sx={{ width: "300px" }}>
          <InputLabel id="fruitSelectLabel">Select a model</InputLabel>
          <Select
          value={menu}
          onChange={handleChange}
          
          >
            <MenuItem value={10}>Modern</MenuItem>
            <MenuItem value={20}>Vintage</MenuItem>
            <MenuItem value={30}>Classic</MenuItem>
            <MenuItem ></MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "300px", marginLeft: '50px' }}>
          <InputLabel id="fruitSelectLabel">Room type</InputLabel>
          <Select
          value={menu}
          onChange={handleChange}
          >
            <MenuItem value={40}>Bed Room</MenuItem>
            <MenuItem >Living Room</MenuItem>
            <MenuItem >Dinnig Hall</MenuItem>
            <MenuItem ></MenuItem>
          </Select>
        </FormControl>
      </Box> */}

<div style={{ display: 'flex', flexDirection: 'row',marginLeft:'60px' }}>
  <MenuList />
  <MenuList />
</div>







      <ImageUploadBox />







    </>



  )
}

export default AiInterior
