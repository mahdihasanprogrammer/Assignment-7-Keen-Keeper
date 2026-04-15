import React, { useContext, useState } from 'react';
import { friendContext } from '../../context/friendContextPage/FriendContextPage';
import call_icon from '../../../public/call.png';
import text_icon from '../../../public/text.png';
import video_icon from '../../../public/video.png';




const TimeLinePage = () => {

    const {historyCallMsgVideo} = useContext(friendContext);
    const [sort , setSort] = useState(false);


    

    return (
        <div className='space-y-4 pt-20 pb-10 container mx-auto px-5 md:px-8 lg:px-12'>
            <h1 className='text-[#1F2937] text-4xl md:text-5xl font-bold'>Timeline</h1>

            <button className='btn bg-base-100 text-gray-700 shadow shadow-green-300
            '>Filter timeline</button>


            {historyCallMsgVideo.length ===0 &&
             <div className=' bg-base-100
              shadow-lg flex items-center justify-center p-5 md:p-10 rounded-2xl h-[50vh]'>
                <h1 className='text-3xl  font-semibold text-gray-700'>No data found</h1>
            </div>}

            {/* timeline cards */}
            <div className='space-y-4'>
                {
                historyCallMsgVideo.map(history => 
                    <div className='text-lg p-6 rounded-xl shadow-md bg-base-100 flex items-center gap-5'
                     key={history.id}>
                        
                        <figure>
                            <img 
                            src={history.type === 'Call' ? call_icon :
                                history.type === "Message" ? text_icon:
                                history.type === 'Video' ? video_icon : ""
                            }
                             alt={history.type === 'Call' ? "call_icon" :
                                history.type === "Message" ? "text_icon":
                                history.type === 'Video' ?" video_icon" : ""
                            }
                            />

                        </figure>
                        <div className='text-lg text-[#64748B]'>
                           <h2>
                            <span className='text-[#244D3F]  text-xl font-bold'>{history.type}</span> with {history.name}
                           </h2>
                           <p className='font-medium'>{history.date}</p>
                        
                        </div>
                        </div>
                    )
                }
            </div>
               
        </div>
    );
};

export default TimeLinePage;