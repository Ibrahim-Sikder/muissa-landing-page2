'use client'

import Image from 'next/image';
import company from '../../../src/assets/invest/we-are.jpg'

export default function InvestmentSection() {


    return (
        <div className="sectionMargin  text-white py-8 md:px-4 relative overflow-hidden">


            <div className="w-full max-w-7xl mx-auto">


                <div className="flex flex-col lg:flex-row  justify-center items-center justify-items-center lg:grid-cols-2 gap-16">



                    <div className=' flex-1' >
                        <div className='rounded-md lg:w-[80%] w-[90%]'>
                            <Image alt='services' src={company} className='w-full h-full object-cover' />
                        </div>
                    </div>

                    <div className="space-y-4 text-center  flex-1">

                        <p className='leading-8 text-xl '>ব্যবসায়ের জরুরি ফান্ড তৈরির পরামর্শ থেকে শুরু করে প্রতিষ্ঠানের কাগজপত্র প্রস্তুত, ফান্ডিং প্রোপোজাল ও শক্তিশালী বক্তব্য তৈরিতে সহায়তা প্রদান; মার্কেট অ্যানালাইসিসের মাধ্যমে বাজার তৈরি, প্রতিষ্ঠানের অ্যানালাইসিস ও মনিটরিং রিপোর্ট প্রস্তুত, এবং কার্যপদ্ধতি নির্ধারণে পরামর্শ প্রদানের মাধ্যমে আমরা ব্যবসায়িক সমাধানে নির্ভরযোগ্য সেবা প্রদান করি।</p>


                    </div>
                </div>
            </div>
        </div>
    )
}
