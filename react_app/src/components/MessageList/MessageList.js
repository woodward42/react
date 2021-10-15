import { useState, useEffect } from "react";
import "./MessageList.css";
import { Message } from "./Message/Message";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";


export const MessageList = ({ messages, sendMessage }) => {


	//стейт для инпута
	const [value, setValue] = useState("");

	const keyPressSendMessage = (evt) => {
		if (value && evt.code === "Enter") {
			sendMessage({ value, author: "User" });
      setValue("");
		}
	};

  
	const clickHandlerSendMessage = () => {
		if (value) {
			sendMessage({ value, author: "User" });
      setValue("");
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
				onChange={(evt) => setValue(evt.target.value)}
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
