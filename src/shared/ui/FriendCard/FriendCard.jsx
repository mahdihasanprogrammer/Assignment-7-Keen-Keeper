import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {

    return (
        <Link to={`/friendDetails/${friend.id}`}
         className='bg-base-100 shadow p-10 
        space-y-4 rounded-xl' >
            <figure>
                <img className='h-20 w-20 object-cover object-center rounded-full mx-auto' 
                src={friend.picture} alt={friend.name} />
            </figure>

            <div className='text-center space-y-2'>
                <h2 className='text-xl font-semibold'>{friend.name}</h2>
                <p className='text-xs text-[#64748B]'>{friend.days_since_contact}d ago</p>

                <div className='flex gap-2 justify-center items-center mt-3'>
                    {
                    friend.tags.map((tag,index) => <span key={index}
                         className='badge rounded-full bg-green-100 text-[#244D3F] font-medium'>{tag}</span>)
                    }
                </div>

                <button
                 className={` px-3 py-1 rounded-full text-base-100
                    ${friend.status === 'overdue' ? 'bg-red-600' : friend.status ===  'almost due' ? 'bg-amber-600' : 'bg-green-900' }
                 `}>{friend.status}</button>
            </div>
        </Link>
    );
};

export default FriendCard;