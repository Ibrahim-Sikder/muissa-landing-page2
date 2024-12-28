/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import {
    Box,
    Button,
    Stack,
    Typography,
    useMediaQuery,
    Paper,
    Container,
} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Dayjs } from 'dayjs';

const MeetingBooking = () => {
    const isLargeDevice = useMediaQuery("(min-width:960px)");
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);

    const handleBooking = () => {
        if (!selectedDate || !selectedTime) {
            alert('Please select date and time');
            return;
        }
        console.log('Booking:', {
            selectedDate: selectedDate.format('YYYY-MM-DD'),
            selectedTime: selectedTime.format('HH:mm'),
        });
        alert('Meeting booked successfully!');
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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

                <Container maxWidth="lg">
                    <Stack spacing={4} alignItems="center">

                        <Box sx={{ textAlign: 'center', mb: 4 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    mb: { xs: 1, sm: 2, md: 3 },
                                    fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                                    '& span': {
                                        color: '#34B8B1',
                                    },
                                }}
                            >
                                BOOK YOUR <span>MEETING</span>
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'white',
                                    maxWidth: '600px',
                                    mx: 'auto',
                                }}
                            >
                                A meeting is when two or more people come together to discuss
                                one or more topics, often in a formal or business setting.
                            </Typography>
                        </Box>

                        <Paper
                            elevation={24}
                            sx={{
                                borderRadius: 4,
                                overflow: 'hidden',
                                backgroundColor: 'white',
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                maxWidth: 900,
                                width: '100%',
                            }}
                        >
                            <Box
                                sx={{
                                    flex: 1,
                                    borderRight: { xs: 'none', md: '1px solid #eee' },
                                    p: 2,
                                }}
                            >
                                <DateCalendar
                                    value={selectedDate}
                                    onChange={(newValue) => setSelectedDate(newValue)}
                                    sx={{
                                        '& .MuiPickersDay-root.Mui-selected': {
                                            backgroundColor: '#1591A3',
                                            '&:hover': {
                                                backgroundColor: '#1591A3',
                                            },
                                        },
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    flex: 1,
                                    p: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 3,
                                }}
                            >
                                <Typography variant="h5" sx={{ color: '#333', mb: 2 }}>
                                    Select Time
                                </Typography>

                                <TimePicker
                                    label="Meeting Time"
                                    value={selectedTime}
                                    onChange={(newValue) => setSelectedTime(newValue)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#1591A3' },
                                            '&:hover fieldset': { borderColor: '#1591A3' },
                                            '&.Mui-focused fieldset': { borderColor: '#1591A3' },
                                        },
                                    }}
                                />

                                <Button
                                    variant="contained"
                                    onClick={handleBooking}
                                    sx={{
                                        mt: 'auto',
                                        backgroundColor: '#1591A3',
                                        borderRadius: '50px',
                                        py: 1.5,
                                        '&:hover': {
                                            backgroundColor: '#152644',
                                        },
                                    }}
                                >
                                    DONE!
                                </Button>
                            </Box>
                        </Paper>



                    </Stack>
                </Container>
            </Box>
        </LocalizationProvider>
    );
};

export default MeetingBooking;

