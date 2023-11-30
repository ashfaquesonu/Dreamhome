import React from 'react'
import team from '../Assets/Image/team-1.jpg'
import './Card.css'
import { Button, IconButton, Stack } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MessageIcon from '@mui/icons-material/Message';

const CardDetails = () => {
  return (
    <div className='upc'>
      <div className="gradiant">

      </div>
      <div className="profile-down">
        <img src={team} alt="" />
        <div className="profile-title">
          Ashfaque


        </div>
        <div className="profile-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,


        </div>
        <Stack direction="row" justifyContent="space-evenly">
          <IconButton>
            <WhatsAppIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
         
        </Stack>
        <Stack direction="row" spacing={2} justifyContent='space-evenly' marginTop="15px" >
          <Button variant='contained' startIcon={<MessageIcon/>} >message</Button>
          <Button variant='contained'>call</Button>
        </Stack>

      </div>

    </div>
  )
}

export default CardDetails
