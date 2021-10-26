import "./MessageList.css";
import { Message } from "./Message/Message";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useParams } from "react-router";
import { handleChangeMessageValue,	messageValueSelector, } from "../../store/conversations";
import { messagesByRoomSelector, sendMessageWithThunk} from "../../store/messages";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

export const MessageList = () => {

	const { roomId } = useParams();
	const dispatch = useDispatch();

	const messageValue = useMemo(() => messageValueSelector(roomId), [roomId]);
	const value = useSelector(messageValue);

	const messagesSel = useMemo(() => messagesByRoomSelector(roomId),[roomId]);
	const messages = useSelector(messagesSel);

  
	const clickHandlerSendMessage = () => {
		if (value) {
			dispatch(sendMessageWithThunk({ value, author: "User" }, roomId));
		}
	};
	
	const keyPressSendMessage = (evt) => {
		if (value && evt.code === "Enter") {
			clickHandlerSendMessage();
		}
	};

	return (
		<>
			{
				//рендерим сообщения
				messages.map((message, idx) => (
					<Message
						key={message.value}
						message={message}
					/>
				))
			}
			<Input
				className="MessageList-Input-custom"
				placeholder="...введите текст сообщения"
				value={value}
				onChange={(evt) => {
					dispatch(handleChangeMessageValue(evt.target.value, roomId))
				}}
				onKeyPress={keyPressSendMessage}
				fullWidth={false}
				endAdornment={
					<InputAdornment position="end">
						{value && (
							<Send
								className="MessageList-Send-btn"
								onClick={clickHandlerSendMessage}
							/>
						)}
					</InputAdornment>
				}
			/>
		</>
	);
}

//export default App;
