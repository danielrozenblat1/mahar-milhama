import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { PropaneSharp } from '@mui/icons-material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 245,margin:"2% auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={props.src}
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: 'right', background: `${props.background}` }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'right',fontFamily:"Heebo" }}>
        {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right',fontFamily:"Heebo",color:"#9f0000" }}>
{props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
