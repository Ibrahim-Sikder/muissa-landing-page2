'use client'
import {
  Box,
  Button,
  Typography,
} from '@mui/material'
import { Person, Phone,  Apartment, WhatsApp, Work, Interests } from '@mui/icons-material'
import { FieldValues } from 'react-hook-form'
import MuissaForm from '../Forms/form'
import MUIInput from '../Forms/input'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const MUISelect = dynamic(() => import('../Forms/select'), { ssr: false })

export default function QuoteRequestForm() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const handleSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <MuissaForm onSubmit={handleSubmit}>
      <Box
        sx={{
          bgcolor: 'white',
          borderRadius: '20px',
          p: { xs: 2, sm: 4, md: 6 },
          width: '100%',
          maxWidth: { xs: '100%', sm: '400px', md: '500px' },
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          margin: '0 auto',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: '#1591A3',
            fontSize: {
              xs: '1.3rem',
              sm: '2rem',
            },
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          Book Metting 
        </Typography>

        <Box>
          <MUIInput
            fullWidth
            name='name'
            placeholder="নাম"
            size='medium'
            InputProps={{
              startAdornment: (
                <Person sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />

          <MUIInput
            name='phoneNumber'
            fullWidth
            size='medium'
            label='ফোন নম্বর'
            placeholder="ফোন নম্বর"
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <Phone sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />

          <MUIInput
            name='whatsupNumber'
            fullWidth
            placeholder="হোয়াটসঅ্যাপ নাম্বার"
            variant="outlined"
            size='medium'
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <WhatsApp sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />
          <MUIInput
            name='profession'
            fullWidth
            label='পেশা'
            placeholder="পেশা"
            variant="outlined"
            size='medium'
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <Work sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />
          <MUIInput
            name='investmentExperience'
            fullWidth
            placeholder="বিনিয়োগের পূর্ব অভিজ্ঞতা রয়েছে কিনা।"
            variant="outlined"
            size='medium'
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <Apartment sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />



          <MUISelect
            size="medium"
            items={["নিয়মিত বিনিয়োগ", " হালাল বিনিয়োগ", " ঝুঁকিমুক্ত বিনিয়োগ"]}
            fullWidth
            label="কোন ধরনের বিনিয়োগে আগ্রহী"
            placeholder="Select investment type"
            name="investment"
            adornment={<Interests sx={{ color: 'text.secondary' }} />}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#1591A3',
              color: '#fff',
              padding: {
                xs: '8px 16px',
                sm: '10px 24px',
                md: '12px 32px',
              },
              fontWeight: 'bold',
              fontSize: {
                xs: '18px',
                sm: '18px',
                md: '20px',
              },
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'color 0.5s ease-in-out',
              zIndex: 1,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 0,
                height: 0,
                backgroundColor: '#00305C',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                transition: 'width 0.5s ease-out, height 0.5s ease-out',
                zIndex: -1,
              },
              '&:hover': {
                color: '#fff',
                '&::before': {
                  width: '300%',
                  height: '300%',
                },
              },
              '&:active': {
                transform: 'scale(0.98)',
                transition: 'transform 0.1s',
              },
            }}
          >
            জমা দিন
          </Button>
        </Box>
      </Box>
    </MuissaForm>
  )
}
