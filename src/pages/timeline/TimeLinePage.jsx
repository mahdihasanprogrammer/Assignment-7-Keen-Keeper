import React, { useContext, useState } from 'react';

import call_icon from '../../assets/call.png'
import text_icon from '../../assets/text.png';
import video_icon from '../../assets/video.png';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FriendContext } from '../../context/friendContext';




 

const TimeLinePage = () => {

    const {historyCallMsgVideo} = useContext(FriendContext)
    const [filteredData, setFilteredData] = useState(historyCallMsgVideo);
  
  


    const handleSelected =(e) =>{
        if(e.target.value === 'All data'){
              setFilteredData(historyCallMsgVideo);
        }

        else if(e.target.value ==='Call'){
            const result = historyCallMsgVideo.filter(data => data.type === 'Call');
            setFilteredData(result);
        }

        else if(e.target.value==='Text'){
              const result = historyCallMsgVideo.filter(data => data.type === 'Text')
                setFilteredData(result)
        }
        else if(e.target.value === 'Video'){
           const result =  historyCallMsgVideo.filter(data => data.type === 'Video')
                setFilteredData(result)
        }
       
       
    }


    return (
        <div className='space-y-4 pt-20 pb-10 container mx-auto px-5 md:px-8 lg:px-12'>
            <h1 className='text-[#1F2937] text-4xl md:text-5xl font-bold'>Timeline</h1>

            <select onClick={handleSelected}
             name="" id="" defaultValue=""
             className=' select bg-base-100 shadow py-2 px-6 border-double border-2 rounded-md shadow-green-400 outline-0 space-y-2'>

                <option className='bg-base-300' value=''  disabled >Filter timeline</option>
                <option className='bg-base-300'  value="All data">All data</option>
                <option className='bg-base-300' value="Call">Call</option>
                <option className='bg-base-300' value="Text">Text</option>
                <option className='bg-base-300' value="Video">Video</option>
               
            </select>

        


            {/* added no data found text when page is empty */}
            {filteredData.length ===0 &&
             <div className=' bg-base-100
              shadow-lg flex items-center justify-center p-5 md:p-10 rounded-2xl h-[50vh]'>
                <h1 className='text-3xl  font-semibold text-gray-700'>No data found</h1>
            </div>}

            {/* timeline cards */}
            <div className='space-y-4'>
                {
                filteredData.map((history, index) => 
                    <div className='text-lg p-6 rounded-xl shadow-md bg-base-100 flex items-center gap-5'
                     key={index}>
                        
                        <figure>
                            <img 
                            src={history.type === 'Call' ? call_icon :
                                history.type === "Text" ? text_icon:
                                history.type === 'Video' ? video_icon : ""
                            }
                             alt={history.type === 'Call' ? "call_icon" :
                                history.type === "Text" ? "text_icon":
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