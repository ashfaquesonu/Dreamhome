import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom'

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { teams } from '../action/userAction';
import AdminModel from '../Component/Model2';

const UsersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [currentModelUser, setCurrentModelUser] = useState(null);
  
  const handleOpen = (user) => {
    setCurrentModelUser(user);
    setOpen(true);
  };

  const user = useSelector((state) => state.user.user);
  const { users, loading, error } = useSelector((state) => state.teamList);

  useEffect(() => {
    if (user && user.role !== 'admin') {
      if (!users.length > 0) dispatch(teams);
    } else {
      navigate('/auth');
    }
  }, [dispatch, user, users]);

  const rows = users.map((user, index) => {
    return {
      id: user._id,
      phone: user.contactno,
      email: user.email,
      access: user.role,
      name: user.userName,
      isAdmin: user.isAdmin,
      engineer: user.engineer,
      architecture: user.architecture,
    };
  });

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'accessLevel',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row }) => {
        const handleAccessLevelClick = (user) => {
          handleOpen(user);
        };

        return (
          <Box
            width="60%"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              row.isAdmin === true ? 'grey' : 'green'
            }
            borderRadius="4px"
            onClick={() => handleAccessLevelClick(row)}
            style={{ cursor: 'pointer' }}
          >
            {row.isAdmin ? (
              <AdminPanelSettingsOutlinedIcon />
            ) : (
              <LockOpenOutlinedIcon />
            )}
            <Typography sx={{ ml: '5px' }}>
              {row.isAdmin
                ? 'Admin'
                : row.engineer && row.architecture
                ? 'Both'
                : row.engineer
                ? 'Engineer'
                : row.architecture
                ? 'Architecture'
                : 'User'}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Box m="20px">
        <Box
          m="40px 0 0 0"
          height="75vh"
        >
          <DataGrid
            checkboxSelection={false}
            rows={rows}
            columns={columns}
            loading={loading}
            error={error}
          />
        </Box>
      </Box>
      {open && (
        <AdminModel
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          name={currentModelUser?.name}
          id={currentModelUser?.id}
          engineer={currentModelUser?.engineer}
          architecture={currentModelUser?.architecture}
        />
      )}
    </>
  );
};

export default UsersList;
