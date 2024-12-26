export default function ComparionSection() {
    return (
        <div className="w-full sectionMargin bg-[#] p-6 py-10">
            <div className="max-w-6xl mx-auto">

                <div className="text-white text-center mb-8 space-y-2">
                    <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-3">
                        আপনি কি বিনিয়োগ করার জন্য তৈরী?
                    </h1>
                    <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-2xl font-bold leading-tight mt-3">
                        আমাদের সাথে অভিজ্ঞ হওয়ার পর আপনি কি আসা করবেন ?
                    </h3>
                </div>

                {/* Use flex on larger screens and stack on smaller screens */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-y-5 md:gap-10">

                    {/* Image Box 1 */}
                    <div className="space-y-4">
                        <div className="group relative h-[250px] lg:h-[400px] w-[250px] lg:w-[400px] md:w-[300px] md:h-[300px]">
                            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                            <div className="border-4 border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-blue-400">
                                <div className="aspect-square relative bg-[#001a38] rounded-lg overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <p className="text-white/70 text-lg">Image Box 1</p>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-white/80 text-sm">-Before</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Box 2 */}
                    <div className="space-y-4">
                        <div className="group relative h-[250px] lg:h-[400px] w-[250px] lg:w-[400px] md:w-[300px] md:h-[300px]">
                            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                            <div className="border-4 border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-blue-400">
                                <div className="aspect-square relative bg-[#001a38] rounded-lg overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <p className="text-white/70 text-lg">Image Box 2</p>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-white/80 text-sm">-After</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
