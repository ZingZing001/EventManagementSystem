import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to the Event Management System
        </Typography>
        <Typography variant="body1" align="center">
          This is a platform where you can create, manage, and book events.
        </Typography>
      </Grid>
    </Container>
  );
};

export default Home;
