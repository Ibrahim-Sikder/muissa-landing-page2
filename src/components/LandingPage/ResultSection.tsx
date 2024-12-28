'use client';

import { motion } from 'framer-motion';

export default function ComparionSection() {
  return (
    <div className="w-full sectionMargin bg-[#001a38] p-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section with Zoom Animation */}
        <div className="text-white text-center mb-8 space-y-2">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            আপনি কি বিনিয়োগ করার জন্য তৈরী?
          </motion.h1>
          <motion.h3
            className="text-xl sm:text-3xl md:text-4xl lg:text-2xl font-bold leading-tight mt-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          >
            আমাদের সাথে অভিজ্ঞ হওয়ার পর আপনি কি আসা করবেন ?
          </motion.h3>
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-y-5 md:gap-10">
          {/* Image Box 1 */}
          <motion.div
            className="space-y-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <div className="border rounded-md border-white hover:border-4 hover:border-white group relative  h-auto sm:h-[250px] md:h-[300px] lg:h-[400px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px]">
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="rounded-lg p-4 transition-all duration-300 hover:border-white">
                <h2 className="text-lg sm:text-xl md:text-2xl mb-2">-Before</h2>
                <div className="w-full h-auto  sm:h-[200px] md:h-[200px] lg:h-[300px] aspect-square relative bg-[#001a38] rounded-lg overflow-hidden">
                  <div className="w-full h-full absolute inset-0 flex items-center justify-center">
                    <p className="text-white/70 text-sm sm:text-lg">Image Box 1</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="text-xs sm:text-sm md:text-base">
                  নিজের আর্থিক অবস্থার মূল্যায়ন করুন। সম্ভাব্য ঝুঁকিগুলি বুঝুন। বিনিয়োগের
                  লক্ষ্য এবং সময়সীমা নির্ধারণ করুন। বাজার ও বিনিয়োগের ধরণ সম্পর্কে জ্ঞান
                  অর্জন করুন।
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <div className="border rounded-md border-white hover:border-4 hover:border-white group relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px]">
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="rounded-lg p-4 transition-all duration-300 hover:border-white">
                <h2 className="text-lg sm:text-xl md:text-2xl mb-2">-After</h2>
                <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] aspect-square relative bg-[#001a38] rounded-lg overflow-hidden">
                  <div className="w-full h-full absolute inset-0 flex items-center justify-center">
                    <p className="text-white/70 text-sm sm:text-lg">Image Box 1</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="text-xs sm:text-sm md:text-base">
                  বিনিয়োগের অগ্রগতি নিয়মিত পর্যবেক্ষণ করুন। বিনিয়োগ পরিকল্পনা অনুযায়ী
                  সিদ্ধান্ত নিন। ঝুঁকি কমানোর জন্য বিনিয়োগ বৈচিত্র্য করুন। আর্থিক লক্ষ্য
                  অনুযায়ী ফলাফল মূল্যায়ন করুন।
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
