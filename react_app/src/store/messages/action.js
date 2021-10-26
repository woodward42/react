import {SEND_NEW_MESSAGE} from './types';

//action creator
export const handleSendNewMessage = (message, roomId) => {
    return {
        type: SEND_NEW_MESSAGE,
        payload: {message, roomId}
    }

};