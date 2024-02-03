import React, { useState } from 'react';
import team from '../Assets/Image/team-1.jpg';
import './Card.css';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MessageIcon from '@mui/icons-material/Message';
import CallIcon from '@mui/icons-material/Call';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../Component/Modal';
import { deleteEngineer } from '../action/engineer';

const CardDetails = ({ engineer}) => {
  const [showContactNumber, setShowContactNumber] = useState(false);
  const { name, description, number } = engineer;

  const handleCallButtonClick = () => {
    setShowContactNumber(true);
  };



  const handleDeleteButtonClick = () => {
    deleteEngineer(engineer._id)
  };

  return (
    <div className='upc'>
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={team} alt="" />
        <div className="profile-title">{engineer.userName}</div>
        <div className="profile-description">{description}</div>
        <Stack direction="row" justifyContent="space-evenly">
          {engineer.instagram && (
            <IconButton>
              <InstagramIcon />
            </IconButton>
          )}
          {engineer.whatsapp && (
            <IconButton>
              <WhatsAppIcon />
            </IconButton>
          )}
          {engineer.facebook && (
            <IconButton>
              <FacebookIcon />
            </IconButton>
          )}
          {engineer.linkedin && (
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          )}
        </Stack>
        <Stack direction="row" spacing={2} justifyContent='space-evenly' marginTop="15px" >
          <Button variant='contained' startIcon={<MessageIcon/>} >Message</Button>
          <Button variant='contained' onClick={handleCallButtonClick}>Call</Button>
          <IconButton onClick={handleDeleteButtonClick}>
            <DeleteIcon />
          </IconButton>
        </Stack>
        {showContactNumber && (
          <Typography variant="body2" color="textSecondary" marginTop="10px">
            Contact Number: {number}
          </Typography>
        )}
      </div>
      {/* <Modal open={open} setOpen={setOpen} engineer={engineer} /> */}
    </div>
  );
}

export default CardDetails;
