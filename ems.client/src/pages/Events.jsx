import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import EventCard from './components/EventCard.jsx';
import { fetchEvents } from '../services/api.js';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(data => setEvents(data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Events
      </Typography>
      <Grid container spacing={4}>
        {events.map(event => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Events;
