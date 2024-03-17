import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import { mailAction } from '../action/userAction';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen,mail }) {
  const [message, setMessage] = React.useState('');

  const handleClose = () => setOpen(false);
  const {  user} = useSelector(
    (state) => state.user
  )

  const handleSend = () => {
    console.log('Message sent:', message,mail,user.email);
    mailAction({ message: message, user: user.email, mail: mail });
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Text
          </Typography>
          <TextField
            id="text-field"
            label="Text"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleSend} variant="contained" color="primary">
              Send
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
