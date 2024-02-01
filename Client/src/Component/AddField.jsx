import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { addEngineers } from '../action/engineer';
import FileBase64 from 'react-file-base64';

export default function InputWithIcon({ engineer }) {
  console.log(engineer)
  const [formData, setFormData] = React.useState({
    name: '',
    description: '',
    number: '',
    email: '',
    instagram: '',
    whatsapp: '',
    facebook: '',
    linkedin: '',
  });
  const [image, setImage] = React.useState(null);

  useEffect(() => {
    if (engineer) {
      // Set initial values based on engineer
      setFormData({
        name: engineer.name || '',
        description: engineer.description || '',
        number: engineer.number || '',
        email: engineer.email || '',
        instagram: engineer.instagram || '',
        whatsapp: engineer.whatsapp || '',
        facebook: engineer.facebook || '',
        linkedin: engineer.linkedin || '',
      });
    } else {
      // Set initial values to empty strings
      setFormData({
        name: '',
        description: '',
        number: '',
        email: '',
        instagram: '',
        whatsapp: '',
        facebook: '',
        linkedin: '',
      });
    }
  }, [engineer]);

  const handleButtonClick = () => {
    console.log('Form Data:', { ...formData, image });
    addEngineers({ ...formData, image });
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  return (
    <Box>
      <TextField
        label="Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleInputChange('name')}
      />
      <TextField
        label="Description"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        margin="normal"
        value={formData.description}
        onChange={handleInputChange('description')}
      />
      <TextField
        label="Number"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        margin="normal"
        value={formData.number}
        onChange={handleInputChange('number')}
      />
      <TextField
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        margin="normal"
        type="email"
        value={formData.email}
        onChange={handleInputChange('email')}
      />
      <TextField
        label="Instagram"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <InstagramIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        margin="normal"
        value={formData.instagram}
        onChange={handleInputChange('instagram')}
      />
      <TextField
        label="WhatsApp"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <WhatsAppIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        margin="normal"
        value={formData.whatsapp}
        onChange={handleInputChange('whatsapp')}
      />
      <TextField
        label="Facebook"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FacebookIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        margin="normal"
        value={formData.facebook}
        onChange={handleInputChange('facebook')}
      />
      <TextField
        label="LinkedIn"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkedInIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        margin="normal"
        value={formData.linkedin}
        onChange={handleInputChange('linkedin')}
      />
      <FileBase64
        type='file'
        multiple={false}
        onDone={({ base64 }) => setImage(base64)}
      />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Submit
      </Button>
    </Box>
  );
}
