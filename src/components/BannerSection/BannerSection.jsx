import React from 'react';

const BannerSection = () => {
    return (
        <div className='pt-15 md:pt-20 pb-10 border-b-2 border-gray-200'>
            
            <div className='text-center pb-10 space-y-4'>
                <h1 className='text-4xl leading-11 md:text-5xl font-bold text-[#1F2937]'>
                    Friends to keep close in your life
                </h1>
                <p className='mb-8 md:w-4/6 mx-auto '>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <button className='bg-green-800 btn text-base-100'>+ Add a Friend</button>
            </div>

            {/* card container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-[#64748B] text-lg'>

                    <div className='bg-base-100 shadow h-32 flex flex-col justify-center items-center px-3 rounded-xl'>
                        <h2 className='text-3xl font-semibold text-[#244D3F]'>10</h2>
                        <p>Total Friends</p>
                    </div>

                    <div className='bg-base-100 shadow h-32 flex flex-col justify-center items-center px-3 rounded-xl'>
                        <h2 className='text-3xl font-semibold text-[#244D3F]'>3</h2>
                        <p>On Track</p>
                    </div>

                    <div className='bg-base-100 shadow h-32 flex flex-col justify-center items-center px-3 rounded-xl'>
                        <h2 className='text-3xl font-semibold text-[#244D3F]'>6</h2>
                        <p>Need Attention</p>
                    </div>

                    <div className='bg-base-100 shadow h-32 flex flex-col justify-center items-center px-3 rounded-xl'>
                        <h2 className='text-3xl font-semibold text-[#244D3F]'>12</h2>
                        <p>Total Interactions This Month</p>
                    </div>
            </div>
        </div>
    );
};

export default BannerSection;