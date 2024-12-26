'use client'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import company from '../../../src/assets/invest/some-features.png'
export default function BusinessSection() {


  return (
    <div className="sectionMargin  text-white py-8 md:px-4 relative overflow-hidden">


      <div className="w-full max-w-7xl mx-auto">


        <div className="grid place-items-center justify-items-center lg:grid-cols-2 gap-16 items-start">


       
          <div className="space-y-4 order-2 md:order-1">
            <h1 className="text-2xl md:text-5xl font-bold mb-5">
              About Our Business
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
            আপনার ব্যবসার জন্য সঠিক বিনিয়োগ সঙ্গী
            </h1>

            <List sx={{ color: 'white' }}>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    className: 'responsive-text',
                    color: 'white'
                  }}
                  primary="Customizable funding strategies tailored to your business needs."
                />

              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="End-to-end support in creating and submitting funding proposals."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="Expert guidance in preparing essential business documentation for funding."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="Personalized investor pitch preparation and consultation for maximum impact."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { color: 'white' } }}
                  primary="In-depth market analysis to identify and secure potential funding opportunities."
                />
              </ListItem>


            </List>

            <p className='leading-7'>ব্যবসায়ের জরুরি ফান্ড তৈরির পরামর্শ থেকে শুরু করে প্রতিষ্ঠানের কাগজপত্র প্রস্তুত, ফান্ডিং প্রোপোজাল ও শক্তিশালী বক্তব্য তৈরিতে সহায়তা প্রদান; মার্কেট অ্যানালাইসিসের মাধ্যমে বাজার তৈরি, প্রতিষ্ঠানের অ্যানালাইসিস ও মনিটরিং রিপোর্ট প্রস্তুত, এবং কার্যপদ্ধতি নির্ধারণে পরামর্শ প্রদানের মাধ্যমে আমরা ব্যবসায়িক সমাধানে নির্ভরযোগ্য সেবা প্রদান করি।</p>



          </div>
          <div className=' order-1 md:order-2 md:w-[500px] h-[200px] md:h-[500px] rounded-md  overflow-hidden' >
            <Image alt='services' src={company} className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}
