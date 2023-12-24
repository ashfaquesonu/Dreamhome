import { Button, Card, CardMedia, Typography, CardContent, CardActions } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'




function ConstructerCard({ title, image, targetRoute }) {
  return (
    <Card sx={{ margin: "auto", maxWidth: 345, marginBottom:'30px' }}  >
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
        <Link to={targetRoute}>
          <Button size="small"  >
            View
          </Button>
        </Link>


      </CardActions>

    </Card>


  )
}

export default ConstructerCard
