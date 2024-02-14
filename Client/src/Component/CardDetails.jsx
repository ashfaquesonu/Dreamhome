import React, { useState } from 'react'
import team from '../Assets/Image/team-1.jpg'
import './Card.css'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MessageIcon from '@mui/icons-material/Message'
import CallIcon from '@mui/icons-material/Call'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Modal from '../Component/Modal'
import { deleteUser, getAllArchitectures, getAllEngineers } from '../action/engAndArc'
import { useSelector } from 'react-redux'

const CardDetails = ({ engineer,setArchitectures,setEngineers }) => {
  const [showContactNumber, setShowContactNumber] = useState(false)
  const { name, description, number } = engineer

  const { isAuthenticated, user, loading, error } = useSelector(
    (state) => state.user
  )

  const handleCallButtonClick = () => {
    setShowContactNumber(true)
  }

  const handleDeleteButtonClick = async() => {
    deleteUser(engineer._id)
    if(engineer.engineer){
      const data = await getAllEngineers();
      setEngineers(data)
    }else if(engineer.architecture){
      const data = await getAllArchitectures();
      setArchitectures(data)
    }
    
  }
console.log(engineer.image)
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={engineer?.image} alt="imagep" />
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
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-evenly"
          marginTop="15px"
        >
          <Button variant="contained" startIcon={<MessageIcon />}>
            Message
          </Button>
          <Button variant="contained" onClick={handleCallButtonClick}>
            Call
          </Button>
          {user.isAdmin && (
            <IconButton onClick={handleDeleteButtonClick}>
              <DeleteIcon />
            </IconButton>
          )}
        </Stack>
        {showContactNumber && (
          <Typography variant="body2" color="textSecondary" marginTop="10px">
            Contact Number: {number}
          </Typography>
        )}
      </div>
      {/* <Modal open={open} setOpen={setOpen} engineer={engineer} /> */}
    </div>
  )
}

export default CardDetails
