import React, {  createContext, useState } from 'react';

import { toast } from 'react-toastify';

export const friendContext = createContext();

const FriendContextPage = ({children}) => {
   
const [historyCallMsgVideo, setHistoryCallMsgVideo] = useState([]);



    const handleCall = (currentFriend) =>{

        toast(`📞 Call with ${currentFriend.name }`);

        const updatedCurrentFriendData = {
            ...currentFriend,
            type:'Call',
            date:new Date().toDateString('en-GB'),
        }

        setHistoryCallMsgVideo([...historyCallMsgVideo,updatedCurrentFriendData])
  
       
    }

    const handleMessage = (currentFriend) =>{

        toast.success(`💬 Message with ${currentFriend.name}`);
        
        const updatedCurrentFriendData = {
            ...currentFriend,
            type:'Message',
            date: new Date().toDateString('en-GB'),
        }

        setHistoryCallMsgVideo([...historyCallMsgVideo, updatedCurrentFriendData])
    }


    const handleVideo = (currentFriend) =>{

        toast.success(`📹 Video with ${currentFriend.name}`);

        const updatedCurrentFriendData = {
            ...currentFriend,
            type:"Video",
            date: new Date().toDateString('en-GB'),
        }


        setHistoryCallMsgVideo([...historyCallMsgVideo, updatedCurrentFriendData])
    }

    console.log(historyCallMsgVideo);

    const data = {
        historyCallMsgVideo,
        handleCall,
        handleMessage,
        handleVideo,
    
    }



    return (
     <friendContext.Provider value={data}>
        {children}
     </friendContext.Provider>
    );
};

export default FriendContextPage;