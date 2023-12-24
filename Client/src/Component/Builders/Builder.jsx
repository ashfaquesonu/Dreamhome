import React from 'react'
import ContructerCard from './ConstructerCard'
import { Grid, Box } from '@mui/material'
import engineersImage from '../../Assets/Image/Engineers.jpg'
import architectureImage from '../../Assets/Image/archImage.webp'
import projectImage from '../../Assets/Image/projectImage.jpg'
import Engineers from '../../pages/Engineers'



function Builder() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '60px' }}>Our Services</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={6} >
          <Grid item xs={2}>
            <ContructerCard
              title={"Engineers"}
              image={engineersImage}
              targetRoute='/engineers'
            />
          </Grid>
          <Grid item xs={2}>
            <ContructerCard title={"Architecture"} image={architectureImage} targetRoute='/architectures' />
          </Grid>
          <Grid item xs={2}>
            <ContructerCard title={"Projects"} image={projectImage} targetRoute='/projects' />
          </Grid>
        </Grid>
      </Box>



    </div>
  )
}

export default Builder
