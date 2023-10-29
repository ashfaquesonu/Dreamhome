import { Button, Card, CardMedia, Typography, CardContent, CardActions } from '@mui/material'
import React from 'react'


function ConstructerCard({ title, image }) {
  return (
    <Card sx={{ margin: "auto", maxWidth: 345 }}  >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {title}

        </Typography>


      </CardContent>
      <CardActions>
        <Button size="small">View</Button>

      </CardActions>
    </Card>


  )
}

export default ConstructerCard
