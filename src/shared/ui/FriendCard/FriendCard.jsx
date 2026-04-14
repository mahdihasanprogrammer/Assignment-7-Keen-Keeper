import React from 'react';

const FriendCard = ({friend}) => {
console.log(friend)
    return (
        <div className='bg-base-100 shadow p-10 space-y-4 ' >
            <figure>
                <img className='h-20 w-20 object-cover object-center rounded-full mx-auto' 
                src={friend.picture} alt={friend.name} />
            </figure>

            <div className='text-center space-y-2'>
                <h2 className='text-xl font-semibold'>{friend.name}</h2>
                <p className='text-xs text-[#64748B]'>{friend.days_since_contact}d ago</p>

                <div className='flex gap-2 justify-center items-center'>
                    {
                    friend.tags.map(tag => <span className='badge rounded-full bg-green-100 text-[#244D3F] font-medium'>{tag}</span>)
                    }
                </div>

                <button
                 className={` px-3 py-1 rounded-full text-base-100
                    ${friend.status === 'overdue' ? 'bg-red-500' : friend.status ===  'almost due' ? 'bg-[#EFAD44]' : 'bg-green-900' }
                 `}>{friend.status}</button>
            </div>
        </div>
    );
};

export default FriendCard;