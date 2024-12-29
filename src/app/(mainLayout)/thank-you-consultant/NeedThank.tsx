'use client'

/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    Button,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { CheckCircle, Event, WhatsApp } from '@mui/icons-material';
import Link from 'next/link';

interface ThankYouPageProps {
    bookingDetails: {
        fullName: string;
        date: string;
        time: string;
        whatsappNumber: string;
    };
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ bookingDetails }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #1591A3 0%, #152644 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                py: 4,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    right: '5%',
                    bottom: '10%',
                    width: '200px',
                    height: '200px',
                    background: 'url(/placeholder.svg?height=200&width=200)',
                    opacity: 0.2,
                }}
            />

            <Container maxWidth="md">
                <Paper
                    elevation={24}
                    sx={{
                        borderRadius: 4,
                        overflow: 'hidden',
                        backgroundColor: 'white',
                        textAlign: 'center',
                        p: { xs: 3, sm: 5 },
                    }}
                >
                    <CheckCircle sx={{ fontSize: 80, color: '#34B8B1', mb: 2 }} />
                    <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#152644', fontWeight: 'bold' }}>
                        Thank You, {bookingDetails?.fullName}!
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 3, color: '#1591A3' }}>
                        Your meeting has been successfully booked.
                    </Typography>

                    <Stack
                        direction={isSmallScreen ? 'column' : 'row'}
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mb: 4 }}
                    >
                        <Paper elevation={3} sx={{ p: 2, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
                            <Event sx={{ fontSize: 40, color: '#1591A3', mb: 1 }} />
                            <Typography variant="body1">
                                Date:33-33-33 <strong>{bookingDetails?.date}</strong>
                            </Typography>
                            <Typography variant="body1">
                                Time: 04:40<strong>{bookingDetails?.time}</strong>
                            </Typography>
                        </Paper>
                        <Paper elevation={3} sx={{ p: 2, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
                            <WhatsApp sx={{ fontSize: 40, color: '#25D366', mb: 1 }} />
                            <Typography variant="body1">
                                WhatsApp:65456787655 <strong>{bookingDetails?.whatsappNumber}</strong>
                            </Typography>
                        </Paper>
                    </Stack>

                    <Typography variant="body1" sx={{ mb: 3 }}>
                        We're excited to meet with you! You'll receive a confirmation message on WhatsApp shortly.
                    </Typography>

                    <Button
                        component={Link}
                        href='/'
                        variant="contained"
                        sx={{
                            backgroundColor: '#1591A3',
                            borderRadius: '50px',
                            py: 1.5,
                            px: 4,
                            '&:hover': {
                                backgroundColor: '#152644',
                            },
                        }}
                    >
                        Back to Home
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
};

export default ThankYouPage;

