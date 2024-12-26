'use client';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import { motion } from 'framer-motion';
import company from '../../../src/assets/invest/some-features.png';

const fadeInVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeInOut',
    },
  }),
};

export default function BusinessSection() {
  return (
    <div className="sectionMargin text-white py-8 md:px-4 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid place-items-center justify-items-center lg:grid-cols-2 gap-16 items-start">
          {/* Text Section */}
          <motion.div
            className="space-y-4 order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h1
              className="text-2xl md:text-5xl font-bold mb-5"
              variants={fadeInVariant}
              custom={0}
            >
              About Our Business
            </motion.h1>
            <motion.h1
              className="text-2xl md:text-3xl font-bold mb-3"
              variants={fadeInVariant}
              custom={1}
            >
              আপনার ব্যবসার জন্য সঠিক বিনিয়োগ সঙ্গী
            </motion.h1>
            <List sx={{ color: 'white' }}>
              {[
                'Customizable funding strategies tailored to your business needs.',
                'End-to-end support in creating and submitting funding proposals.',
                'Expert guidance in preparing essential business documentation for funding.',
                'Personalized investor pitch preparation and consultation for maximum impact.',
                'In-depth market analysis to identify and secure potential funding opportunities.',
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={fadeInVariant}
                  custom={index + 2}
                >
                  <ListItem>
                    <ListItemIcon sx={{ color: 'white' }}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        style: { color: 'white' },
                      }}
                      primary={text}
                    />
                  </ListItem>
                </motion.div>
              ))}
            </List>
            <motion.p
              className="leading-7"
              variants={fadeInVariant}
              custom={7}
            >
              ব্যবসায়ের জরুরি ফান্ড তৈরির পরামর্শ থেকে শুরু করে প্রতিষ্ঠানের
              কাগজপত্র প্রস্তুত, ফান্ডিং প্রোপোজাল ও শক্তিশালী বক্তব্য তৈরিতে
              সহায়তা প্রদান; মার্কেট অ্যানালাইসিসের মাধ্যমে বাজার তৈরি,
              প্রতিষ্ঠানের অ্যানালাইসিস ও মনিটরিং রিপোর্ট প্রস্তুত, এবং
              কার্যপদ্ধতি নির্ধারণে পরামর্শ প্রদানের মাধ্যমে আমরা ব্যবসায়িক
              সমাধানে নির্ভরযোগ্য সেবা প্রদান করি।
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="order-1 md:order-2 md:w-[500px] h-[200px] md:h-[500px] rounded-md overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Image alt="services" src={company} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
