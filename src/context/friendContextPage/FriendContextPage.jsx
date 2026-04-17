import React, {  Children, useState } from 'react';

import { toast } from 'react-toastify';
import { FriendContext } from '../FriendContext';



const FriendContextPage = ({children}) => {
   
const [historyCallMsgVideo, setHistoryCallMsgVideo] = useState([]);



    const handleCall = (currentFriend) =>{

        toast(`📞 Call with ${currentFriend.name }`);

        delete  currentFriend.id;

        const updatedCurrentFriendData = {
            ...currentFriend,
            type:'Call',
            date:new Date().toDateString('en-GB'),
        }

        setHistoryCallMsgVideo([...historyCallMsgVideo,updatedCurrentFriendData])
  
       
    }

    const handleMessage = (currentFriend) =>{

        toast.success(`💬 Message with ${currentFriend.name}`);

        delete  currentFriend.id;
        const updatedCurrentFriendData = {
            ...currentFriend,
            type:'Text',
            date: new Date().toDateString('en-GB'),
        }

        setHistoryCallMsgVideo([...historyCallMsgVideo, updatedCurrentFriendData])
    }


    const handleVideo = (currentFriend) =>{

        toast(`📹 Video with ${currentFriend.name}`);

        delete  currentFriend.id;
        const updatedCurrentFriendData = {
            ...currentFriend,
            type:"Video",
            date: new Date().toDateString('en-GB'),
        }


        setHistoryCallMsgVideo([...historyCallMsgVideo, updatedCurrentFriendData])
    }



    const data = {
        historyCallMsgVideo,
        setHistoryCallMsgVideo,
        handleCall,
        handleMessage,
        handleVideo,
    
    }



    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendContextPage;