import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Event Management System
      </Typography>
      <Typography variant="body1">
        This is a platform where you can create, manage, and book events.
      </Typography>
    </Container>
  );
};

export default Home;
