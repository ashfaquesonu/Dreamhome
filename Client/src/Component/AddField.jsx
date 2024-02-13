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
import {profileUpdate} from '../action/engAndArc';
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';

export default function InputWithIcon({ user, handleClose }) {
  console.log(user)
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    userName: '',
    description: '',
    contactno: '',
    email: '',
    instagram: '',
    whatsapp: '',
    facebook: '',
    linkedin: '',
  });
  const [image, setImage] = React.useState(null);

  useEffect(() => {
    if (user) {
      // Set initial values based on user
      setFormData({
        userName: user.userName || '',
        description: user.description || '',
        contactno: user.contactno || '',
        email: user.email || '',
        instagram: user.instagram || '',
        whatsapp: user.whatsapp || '',
        facebook: user.facebook || '',
        linkedin: user.linkedin || '',
      });
      setImage(user.image); // Set the image
    } else {
      // Set initial values to empty strings
      setFormData({
        userName: '',
        description: '',
        contactno: '',
        email: '',
        instagram: '',
        whatsapp: '',
        facebook: '',
        linkedin: '',
      });
    }
  }, [user]);

  const handleButtonClick = () => {
    console.log('Form Data:', { ...formData, image });
    dispatch(profileUpdate(user._id,{ ...formData, image }));
    handleClose();
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  return (
    <Box>
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
          value={formData.userName}
          onChange={handleInputChange('userName')}
          style={{ marginRight: '10px' }}
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
      </div>
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
        value={formData.contactno}
        onChange={handleInputChange('contactno')}
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
      <img src={image} alt="Profile" style={{ maxWidth: '100px', maxHeight: '100px' }} />
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
