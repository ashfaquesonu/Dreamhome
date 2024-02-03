import React, { useEffect, useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import { useDispatch, useSelector } from 'react-redux'
// import { teams } from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { teams } from '../action/userAction'
// import { formatDate } from '../../utils/DateConverter'
// import BasicModal from '../../components/Model'

const UsersList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [currentModelId, setCurrentModelId] = useState(null)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const user = useSelector((state) => state.user.user)
  const { users, loading, error } = useSelector((state) => state.teamList)

    useEffect(() => {
      if (user && user.role !== 'admin') {
        if (!users.length > 0) dispatch(teams)
      } else {
        navigate('/auth')
      }
    }, [dispatch, navigate, user, users])

    const rows = users.map((user, index) => {
      return {
        id: user._id, // Use the index as the id
        phone: user.contactno,
        email: user.email,
        access: user.role,
        name: user.userName,
       
        // Add other properties as needed
      }
    })

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
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

    // {
    //   field: 'accessLevel',
    //   headerName: 'Access Level',
    //   flex: 1,
    //   renderCell: ({ row }) => {
    //     const handleAccessLevelClick = (userId) => {
    //       console.log(row)
    //       if (row.access === 'seller') {
    //         // Implement your logic here to handle the click event and get the user's ID (userId)
    //         setCurrentModelId(userId)
    //         handleOpen()
    //       }
    //     }

    //     return (
    //       <Box
    //         width="60%"
    //         p="5px"
    //         display="flex"
    //         justifyContent="center"
    //         // backgroundColor={
    //         //   row.access === 'admin'
    //         //     ? colors.greenAccent[600]
    //         //     : row.access === 'seller'
    //         //     ? colors.greenAccent[700]
    //         //     : colors.greenAccent[700]
    //         // }
    //         borderRadius="4px"
    //         onClick={() => handleAccessLevelClick(row.id)}
    //         style={{ cursor: 'pointer' }}
    //       >
    //         {row.access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
    //         {row.access === 'seller' && <SecurityOutlinedIcon />}
    //         {row.access === 'user' && <LockOpenOutlinedIcon />}
    //         <Typography sx={{ ml: '5px' }}>{row.access}</Typography>
    //       </Box>
    //     )
    //   },
    // },
  ]

  return (
    <Box m="20px">
      {/* <Header title="TEAM" subtitle="Managing the Team Members" /> */}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
              backgroundColor: 'lightblue',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .name-column--cell': {
              color: 'blue', // Change to your desired color
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: 'lightgray', // Change to your desired color
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: 'lightblue', // Change to your desired color
            },
            '& .MuiCheckbox-root': {
              color: 'green', // Change to your desired color
            },
          }}
          
      >
        <DataGrid
          checkboxSelection={false}
          rows={rows}
          columns={columns}
          loading={loading}
          error={error}
        />
        {/* <BasicModal
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          id={currentModelId}
        /> */}
      </Box>
    </Box>
  )
}

export default UsersList
