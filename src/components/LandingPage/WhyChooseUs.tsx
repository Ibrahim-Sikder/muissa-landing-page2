/* eslint-disable react/no-unescaped-entities */
'use client';

export default function WhyChooseUs() {
  return (
    <div className="sectionMargin bg-[#1591A3] text-white py-5 md:py-12 px-3 md:px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight ">Muissa Business Consulting Ltd.</h1>
        <p className="text-lg md:text-xl mb-3 md:mb-8 mt-3 ">- Unlock Your Business's True Potential with Muissa -</p>
        <h2 className="text-xl md:text-3xl font-semibold mb-10">Why Choose Us?</h2>

   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
   
          <div className="bg-[#005780] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Reason #1</h3>
            <p>
              We provide tailored investment strategies designed to maximize growth for every client.
              With years of expertise, our solutions are customized to your unique business needs.
            </p>
          </div>

   
          <div className="bg-[#005780] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Reason #2</h3>
            <p>
              Comprehensive end-to-end support, from funding proposal creation to business
              documentation preparation, ensuring every step is seamless and successful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
