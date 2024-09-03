import React, { useState, useEffect } from 'react';
import { COLLECTION_ID_MESSAGES, DATABASE_ID, databases } from '../appwriteConfig';

const Room = () => {

    const [messages, setMessages] = useState([]);


    useEffect(() => {
        getMessages();
    }, []);

    const getMessages = async () => {
       
        const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID_MESSAGES);
        console.log('Response:', response);
        setMessages(response.documents);
        
    };

    return (
        <main className='container'>
            <div className='room--container'>
                <div>
                    {messages.map(messages => (
                        <div key={messages.$id}>
                            <div>
                                <p>{messages.$createdAt}</p>
                            </div>
                            <div>
                                <span>{messages.body}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Room;
