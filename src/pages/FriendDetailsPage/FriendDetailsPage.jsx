import React from 'react';
import FriendCard from '../../shared/ui/FriendCard/FriendCard';
import { useLoaderData, useParams } from 'react-router';
import ErrorPage from '../errorPage/ErrorPage';
import Profile from './Profile';
import ProfileDetail from './ProfileDetail';

const FriendDetailsPage = () => {

    const {userId} = useParams();

    const friendsData = useLoaderData();
    console.log( 'this use loader data',userId,friendsData)

    const friendDetail = friendsData.find(friend => friend.id == userId);
    
   


    return (
        <div>
           {
            friendDetail ?
                <div
                 className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                 container mx-auto px-5 md:px-8 lg:px-12 py-10 md:py-15'>
                    
                    <Profile friendDetail={friendDetail} />
                    <ProfileDetail friendDetail={friendDetail}/>
                </div>
            : <ErrorPage/>
           }
        </div>
    );
};

export default FriendDetailsPage;