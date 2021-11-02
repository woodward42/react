import { SEND_NEW_MESSAGE } from "../messages/types";
import { handleSendNewMessage } from "../messages";

export const BotSendAnswerMessage = (store) => (next) => (action) => {
	console.log("store", store);

	if (action.type === SEND_NEW_MESSAGE) {
		if (action.payload.message.author === "User") {
			setTimeout(() => {
				store.dispatch(
					handleSendNewMessage(
                        {
                            author: "middleWareBot",
                            value: "hi from middleware HUMAN"
                        },
                        action.payload.roomId
                    )
				)
			}, 1000);
		}
	}

	return next(action);
};
