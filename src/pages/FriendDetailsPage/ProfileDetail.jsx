import React, { useContext } from 'react';
import { FiVideo } from 'react-icons/fi';
import { LuMessageSquareText, LuPhoneCall } from 'react-icons/lu';
import { friendContext } from '../../context/friendContextPage/FriendContextPage';

const ProfileDetail = ({friendDetail}) => {

    const {days_since_contact, next_due_date,goal} = friendDetail;

    const {handleCall,handleMessage,handleVideo} =useContext(friendContext);

    console.log(handleCall);

    return (
        <div className='lg:col-span-2 space-y-5'>

                {/* 1. Stats Cards  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-[#64748B] text-base'>

                    <div className='bg-base-100 shadow h-32 flex flex-col justify-center items-center px-3 rounded-xl'>
                        <h2 className='text-2xl font-semibold text-[#244D3F]'>{days_since_contact}</h2>
                        <p>Days Since Contact</p>
                    </div>

                    <div className='bg-base-100 shadow h-32 flex flex-col justify-center items-center px-3 rounded-xl'>
                        <h2 className='text-2xl font-semibold text-[#244D3F]'>{goal}</h2>
                        <p>Goal (Days)</p>
                    </div>

                    <div className='bg-base-100 shadow h-32 flex flex-col justify-center items-center px-3 rounded-xl'>
                        <h2 className='text-2xl font-semibold text-[#244D3F]'>{next_due_date}</h2>
                        <p>Next Due</p>
                    </div>

           
                </div>

                {/* 2. Relationship Goal Card: */}
                <div className='p-6 bg-base-100 space-y-3 shadow rounded-xl'>
                    <div className='flex items-center justify-between '>
                        <h2 className='text-xl font-medium text-[#244D3F]'>Relationship Goal</h2>
                        <button className='btn'>Edit</button>
                    </div>

                    <p className='text-[#64748B] flex items-center gap-2'>Connect every 
                        <span className='font-bold text-blue-950 text-lg
                        '>{goal} days</span>
                    </p>

                </div>

                {/*3. Quick Check-In Card: */}
              <div className='bg-base-100 p-6 shadow rounded-xl space-y-4'>

                <h1 className='font-medium text-xl text-[#244D3F]'>Quick Check-In</h1>

                {/* card container , call , message, video */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-[#1F2937] text-lg'>

                    {/* Call btn */}
                    <button onClick={() => {handleCall(friendDetail)}}
                     className='btn shadow h-28 flex flex-col justify-center items-center px-3 rounded-xl '>
                        <h2 className='text-3xl  text-[#244D3F]'><LuPhoneCall /></h2>
                        <p className='text-lg'>Call</p>
                    </button>
                    
                    {/* Message btn */}
                    <button onClick={() => {handleMessage(friendDetail)}}
                     className='btn shadow h-28 flex flex-col justify-center items-center px-3 rounded-xl '>
                        <h2 className='text-3xl font-semibold text-[#244D3F]'><LuMessageSquareText /></h2>
                        <p className='text-lg'>Text</p>
                    </button>

                    {/* Video btn */}
                    <button onClick={()=>{handleVideo(friendDetail)}}
                    className='btn shadow h-28 flex flex-col justify-center items-center px-3 rounded-xl '>
                        <h2 className='text-3xl font-semibold text-[#244D3F]'><FiVideo /></h2>
                        <p className='text-lg'>Video</p>
                    </button>

           
                </div>

              </div>
        </div>
    );
};

export default ProfileDetail;