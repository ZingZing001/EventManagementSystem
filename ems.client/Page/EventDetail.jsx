import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { fetchEventById } from '../services/api';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEventById(id).then(data => setEvent(data));
  }, [id]);

  if (!event) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {event.name}
      </Typography>
      <Typography variant="body1">
        {event.description}
      </Typography>
      <Typography variant="body1">
        Date: {new Date(event.date).toLocaleDateString()}
      </Typography>
      <Typography variant="body1">
        Location: {event.location}
      </Typography>
    </Container>
  );
};

export default EventDetail;
s