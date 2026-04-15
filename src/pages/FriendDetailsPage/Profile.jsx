import React from 'react';
import { HiMiniArchiveBox } from 'react-icons/hi2';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';

const Profile = ({friendDetail}) => {
    const {picture, name, status, tags, bio, email} = friendDetail;


    return (
    <div className='space-y-4'>
            
        <div className='bg-base-100 shadow p-7 space-y-4 ' >
            <figure>
                <img className='h-20 w-20 object-cover object-center rounded-full mx-auto' 
                src={picture} alt={name} />
            </figure>

            <div className='text-center space-y-2'>
                <h2 className='text-xl font-semibold'>{name}</h2>

                <button
                 className={` px-3 py-1 rounded-full text-base-100
                    ${status === 'overdue' ? 'bg-red-600' : status ===  'almost due' ? 'bg-amber-600' : 'bg-green-900' }
                 `}>{status}</button>

                <div className='flex gap-2 justify-center items-center mt-3'>
                    {
                    tags.map((tag, index)=> <span key ={index}
                    className='badge rounded-full bg-green-100 text-[#244D3F] font-medium'>{tag}</span>)
                    }
                </div>

                

                 <div className='text-[#64748B] space-y-2'>
                    <h2 className='font-medium italic'>{bio}</h2>
                    <p>{email}</p>
                 </div>
            </div>
        </div>

        <div className='flex flex-col gap-3'>
            <button className='btn bg-white shadow'>
                <span className='text-xl'> <RiNotificationSnoozeLine/></span> Snooze 2 weeks
            </button>
            <button className='btn bg-white shadow'>
                <span className='text-xl'> <HiMiniArchiveBox /> </span> Archive
            </button>
            <button className='btn bg-white shadow text-red-600'>
                <span className='text-xl'> <RiDeleteBinLine />
                </span> Delete
            </button>
        </div>
    </div>
    );
};

export default Profile;