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
    try {
      await createEvent({ name, description, date, location });
      alert('Event created successfully!');
      // Clear the form or redirect as needed
      setName('');
      setDescription('');
      setDate('');
      setLocation('');
    } catch (error) {
      alert('Failed to create event');
    }
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
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Create Event
        </Button>
      </form>
    </Container>
  );
};

export default CreateEvent;
