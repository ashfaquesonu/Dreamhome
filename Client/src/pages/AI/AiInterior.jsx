import { Box, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ImageUploadBox from '../AI/AiInput'
import OutputBox from '../AI/AiImage'
import FileBase64 from 'react-file-base64'
import { ai } from '../../action/ai';

function AiInterior() {
  const [selectedModel, setSelectedModel] = React.useState('');
  const [room, setRoom] = useState('')
  const [image, setImage] = useState(null)
  const [aiImage ,setAiImage] = useState(null)

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleRoomChange = (event) => {
    setRoom(event.target.value)
  }
const handleCreateDesign  = async()=>{
  const aiImage = await ai(selectedModel,room,image)
  setAiImage(aiImage)
}

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
        <Button onClick={handleCreateDesign} variant="contained" endIcon={<AutoAwesomeIcon />} sx={{ display: 'flex', marginLeft: "900px" }}>
          Design this room
        </Button>
      </Paper>
      <Box sx={{ display: 'flex', marginLeft: '60px' }}>
        <FormControl sx={{ width: "300px" }}>
          <InputLabel id="fruitSelectLabel">Select a model</InputLabel>
          <Select
            value={selectedModel}
            onChange={handleModelChange}
          >
            <MenuItem value="Modern">Modern</MenuItem>
            <MenuItem value='Vintage'>Vintage</MenuItem>
            <MenuItem value='Minimalist'>Minimalist</MenuItem>
            <MenuItem value='Professional'>Professional</MenuItem>

            <MenuItem ></MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "300px", marginLeft: '50px' }}>
          <InputLabel id="fruitSelectLabel">Room type</InputLabel>
          <Select
            value={room}
            onChange={handleRoomChange}
          >
            <MenuItem value='Bed room'>Bed Room</MenuItem>
            <MenuItem value='Living room'>Living Room</MenuItem>
            <MenuItem value='Dinnig hall'>Dinnig Hall</MenuItem>
            <MenuItem value='Bathroom' >Bathroom</MenuItem>
            <MenuItem value='office'>Office</MenuItem>

          </Select>
        </FormControl>
      </Box>

      <ImageUploadBox setImage={setImage} image={image} />
      

      <Box sx={{marginLeft:'600px',marginTop:'-693px'}}>

        <OutputBox  aiImage={aiImage}/>
      </Box>










    </>



  )
}

export default AiInterior
