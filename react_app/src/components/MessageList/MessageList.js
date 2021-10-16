import { useState, useEffect } from "react";
import "./MessageList.css";
import { Message } from "./Message/Message";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";


export const MessageList = ({ messages, sendMessage, savedValue, handleChangeValue }) => {


	//стейт для инпута
	//const [value, setValue] = useState(savedValue);
  let value = savedValue;

	const keyPressSendMessage = (evt) => {
		if (value && evt.code === "Enter") {
			sendMessage({ value, author: "User" });
      handleChangeValue("");
      //setValue("");
		}
	};

  
	const clickHandlerSendMessage = () => {
		if (value) {
			sendMessage({ value, author: "User" });
      handleChangeValue("");
      //setValue("");
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
          //setValue(evt.target.value);
          handleChangeValue(evt.target.value);
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
