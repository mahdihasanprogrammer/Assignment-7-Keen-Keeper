import React, { use } from 'react';
import FriendCard from '../../shared/ui/FriendCard/FriendCard';

const friendDataPromise =  fetch('/FriendData.json').then(res =>res.json());

const AllFriendsSection = () => {


const friendData = use(friendDataPromise);
console.log(friendData)

    return (
        <div className='pt-10 pb-15 md:pb-20 space-y-4'>
            <h1 className='text-2xl font-semibold'>Your Friend</h1>

            {/* map friend card  */}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                  {
                friendData.map(friend => <FriendCard key={friend.id} friend={friend} />
                    )
                }
            </div>
        </div>
    );
};

export default AllFriendsSection;