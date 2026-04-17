import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../context/friendContext';


const StatsPage = () => {

const {historyCallMsgVideo} = useContext(FriendContext);


const filterCall = historyCallMsgVideo.filter(app => app.type === 'Call');
const filterText = historyCallMsgVideo.filter(app => app.type === 'Text');
const filterVideo = historyCallMsgVideo.filter(app => app.type === 'Video');



  
const data = [
    {name: 'Call', value: filterCall.length, fill: '#244d3f'},
    {name: 'Text', value: filterText.length, fill: '#7f37f5'},
    {name: 'Video', value: filterVideo.length, fill: '#37a163'},
]
    


    return (
    <div className='container mx-auto py-10 px-5 md:px-8 lg:px-12'>
       <h1 className='mb-6 text-3xl md:text-4xl font-bold text-[#1F2937]'>Friendship Analytics</h1>

       <div className='bg-base-100 shadow p-5 md:p-8 rounded-2xl'>
            <h3 className='text-xl font-medium text-[#244D3F] mb-4
             text-center md:text-left'>By Interaction Type</h3>
        
       { historyCallMsgVideo.length ===0 ?
            
        <div className='text-center px-5 py-8 text-gray-500'>
            <h1 className='text-2xl font-semibold '>No call, text or video found</h1>
        </div> :

         <PieChart style={{ width: '100%', maxWidth: '350px', maxHeight: '70vh', margin:' auto', aspectRatio: 1 }} responsive>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend iconType='circle' wrapperStyle={{marginBottom :'-16px'}}/>
          <Tooltip/>
        </PieChart>}
       </div>
    </div>
    );
};

export default StatsPage;