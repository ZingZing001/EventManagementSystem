import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <Card>
      <CardActionArea component={Link} to={`/events/${event.id}`}>
        <CardMedia
          component="img"
          alt={event.name}
          height="140"
          image={event.image || 'default_image_url'}
          title={event.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {event.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCard;
