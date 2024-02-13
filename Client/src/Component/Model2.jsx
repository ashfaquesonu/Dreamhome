import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { updateEngineer, updateRole } from '../action/engAndArc';
import { teams } from '../action/userAction';

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

export default function AdminModel({
  open,
  setOpen,
  name,
  id,
  engineer,
  architecture,
  handleOpen,
}) {
  // State for engineer and architecture options
  console.log(engineer,architecture,id)
  const dispatch = useDispatch();
  const [engineerOption, setEngineerOption] = useState(engineer);
  const [architectureOption, setArchitectureOption] = useState(architecture);

  useEffect(() => {
    setEngineerOption(engineer);
    setArchitectureOption(architecture);
  }, [engineer, architecture]);


  // Function to handle engineer option change
  const handleEngineerOptionChange = (event) => {
    setEngineerOption(event.target.value);
    dispatch(updateRole(id,{engineer:!engineerOption}))
    dispatch(teams)
  };

  // Function to handle architecture option change
  const handleArchitectureOptionChange = (event) => {
    setArchitectureOption(event.target.value);
    dispatch(updateRole(id,{architecture:!architectureOption}))
    dispatch(teams)
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to change the {name} role?
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Engineer
                <Select
                  label="Engineer"
                  value={engineerOption}
                  onChange={handleEngineerOptionChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </Typography>
            </div>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Architecture
                <Select
                  label="Architecture"
                  value={architectureOption}
                  onChange={handleArchitectureOptionChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
