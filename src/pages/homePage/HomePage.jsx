import React, { Suspense } from 'react';
import BannerSection from '../../components/BannerSection/BannerSection';
import AllFriendsSection from '../../components/allFriendsSection/AllFriendsSection';
import { HashLoader} from 'react-spinners';

const HomePage = () => {
    return (
        <div className='container mx-auto px-5 md:px-8 lg:px-12'>
           <BannerSection/>

            <Suspense 
            fallback= {<div className='flex justify-center items-center h-[60vh]' >
                <HashLoader color='green' size={60}/>
            </div>}>

                   <AllFriendsSection/>

            </Suspense>
        </div>
    );
};

export default HomePage;