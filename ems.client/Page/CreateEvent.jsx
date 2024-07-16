import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { createEvent } from '../services/api';

const CreateEvent = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createEvent({ name, description, date, location });
    // Handle success or error here
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create Event
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Event
        </Button>
      </form>
    </Container>
  );
};

export default CreateEvent;
