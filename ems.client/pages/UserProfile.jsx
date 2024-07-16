import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { fetchUserProfile } from '../services/api';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserProfile().then(data => setUser(data));
  }, []);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {user.username}
      </Typography>
      <Typography variant="body1">
        Email: {user.email}
      </Typography>
    </Container>
  );
};

export default UserProfile;
