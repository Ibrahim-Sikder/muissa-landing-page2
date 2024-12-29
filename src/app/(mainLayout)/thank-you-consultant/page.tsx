/* eslint-disable react/no-unescaped-entities */
'use client'


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
import { CheckCircle, Event, } from '@mui/icons-material';
import Link from 'next/link';
import { Clock } from 'lucide-react';



const ThankYouPage = () => {
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
                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        sx={{
                            color: '#152644',
                            fontWeight: 'bold',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                            textAlign: 'center', // Optional: Aligns text to center for better responsiveness
                            wordBreak: 'break-word', // Ensures long text wraps properly
                        }}
                    >
                        Thank You (Client Name)!
                        {/* {bookingDetails?.fullName} */}
                        
                    </Typography>


                    <Typography variant="h5" sx={{ mb: 3, color: '#3A1C71' }}>
                        Your consultation is confirmed and we're thrilled to meet you!
                    </Typography>
                    <Stack
                        direction={isSmallScreen ? 'column' : 'row'}
                        spacing={3}
                        justifyContent="center"

                        sx={{ mb: 4 }}
                    >
                        <Paper elevation={3} sx={{ p: 2, borderRadius: 2, backgroundColor: '#f5f5f5', }}>

                            <div className="flex  text-left gap-3 ">
                                <div className="bg-[#157F93] p-2 md:p-3 rounded-full">
                                    <Event className="w-4 md:h-6 h-4 md:w-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium">তারিখ</div>
                                    <div className="text-sm">০৩ জানুয়ারী, ২০২৫</div>
                                </div>
                            </div>


                        </Paper>

                        <Paper elevation={3} sx={{ p: 2, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
                            <div className="flex text-left gap-3">
                                <div className="bg-[#157F93] p-2 md:p-3 rounded-full">
                                    <Clock className="w-4 md:h-6 h-4 md:w-6 text-white " />
                                </div>
                                <div>
                                    <div className="text-sm font-medium">সময়</div>
                                    <div className="text-sm">রাত ১০:৩০ ঘটিকা</div>
                                </div>
                            </div>
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

