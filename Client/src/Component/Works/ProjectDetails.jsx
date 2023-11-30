import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import {projectData} from '../../Data/ProjectData'



function handleClick(url) {
  window.location.href = url;
}

function ProjectDetails() {
  return (
    <div>
      <Grid container spacing={3}>

        {projectData.map((item, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Card sx={{ margin: "auto", marginTop: "20px", maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleClick(item.imageUrl)}>
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProjectDetails