import React, { useState, useEffect } from 'react';
import { COLLECTION_ID_MESSAGES, DATABASE_ID, databases } from '../appwriteConfig';

const Room = () => {
    useEffect(() => {
        getMessages();
    }, []);

    const getMessages = async () => {
        try {
            const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID_MESSAGES);
            console.log('Response:', response);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    return (
        <div>
            Room
        </div>
    );
};

export default Room;
