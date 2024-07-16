import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { fetchBookings } from '../services/api';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings().then(data => setBookings(data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Bookings
      </Typography>
      <List>
        {bookings.map(booking => (
          <ListItem key={booking.id}>
            <ListItemText
              primary={`Event: ${booking.event.name}`}
              secondary={`Tickets: ${booking.numberOfTickets}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Bookings;
