/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react';
import { Box, Container, Typography, Paper, Button, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { CheckCircle, Event, WhatsApp, Celebration } from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 20,
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  padding: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6),
  },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
}));

const AnimatedIcon = styled(motion.div)({
  display: 'inline-block',
});

interface BookingConfirmationProps {
  bookingDetails: {
    fullName: string;
    date: string;
    time: string;
    whatsappNumber: string;
  };
}

const UniqueBookingConfirmation: React.FC<BookingConfirmationProps> = ({ bookingDetails }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1591A3 0%, #00305C 50%, #1591A3 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: 4,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Container maxWidth="md">
          <StyledPaper>
            <Box textAlign="center" mb={4}>
              <AnimatedIcon
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              >
                <CheckCircle sx={{ fontSize: 80, color: '#4ECDC4', mb: 2 }} />
              </AnimatedIcon>
              <GradientText variant="h3" component="h1" gutterBottom>
                Fantastic, {bookingDetails?.fullName}!
              </GradientText>
              <Typography variant="h5" sx={{ mb: 3, color: '#3A1C71' }}>
                Your consultation is confirmed and we're thrilled to meet you!
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                mb: 4,
              }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    textAlign: 'center',
                    mb: isSmallScreen ? 2 : 0,
                  }}
                >
                  <Event sx={{ fontSize: 40, color: '#D76D77', mb: 1 }} />
                  <Typography variant="body1">
                    Date: <strong>{bookingDetails?.date}</strong>
                  </Typography>
                  <Typography variant="body1">
                    Time: <strong>{bookingDetails?.time}</strong>
                  </Typography>
                </Paper>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    textAlign: 'center',
                  }}
                >
                  <WhatsApp sx={{ fontSize: 40, color: '#25D366', mb: 1 }} />
                  <Typography variant="body1">
                    WhatsApp: <strong>{bookingDetails?.whatsappNumber}</strong>
                  </Typography>
                </Paper>
              </motion.div>
            </Box>

            <Box textAlign="center">
              <Typography variant="body1" sx={{ mb: 3 }}>
                Get ready for an insightful session! We'll send you a WhatsApp message shortly with more details.
              </Typography>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  startIcon={<Celebration />}
                  sx={{
                    backgroundColor: '#3A1C71',
                    borderRadius: '50px',
                    py: 1.5,
                    px: 4,
                    '&:hover': {
                      backgroundColor: '#D76D77',
                    },
                  }}
                >
                  Back to Home
                </Button>
              </motion.div>
            </Box>
          </StyledPaper>
        </Container>
      </motion.div>
    </Box>
  );
};

export default UniqueBookingConfirmation;

