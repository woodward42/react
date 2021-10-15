import { useState, useRef, useEffect } from "react";
import "./MessageList.css";
import { Message } from "./Message/Message";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";

const static_text = "Статический текст в компонент Message";
const author = "woodward";

export function MessageList() {
	//стейт, где храним массив сообщений
	const [messageList, setMessageList] = useState([
		{ author: author, text: static_text },
		{ author: "Bot", text: "Горячие знакомства бесплатно и без смс" },
	]);
	//стейт для инпута
	const [inputValue, setInputValue] = useState("");

	//ref для инпута
	const inputRef = useRef(null);

	//фокус для инпута
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	//фокус для инпута после отправки сообщения
	useEffect(() => {
		if (
			messageList.length &&
			messageList[messageList.length - 1]?.author === author
		) {
			inputRef.current.focus();
		}
	}, [messageList]);

	//ответ бота
	useEffect(() => {
		//проверяем автора последнего сообщения
		if (
			messageList.length &&
			messageList[messageList.length - 1]?.author === author
		) {
			const delayTimer = setTimeout(() => {
				setMessageList((messageListState) => [
					...messageListState,
					{ author: "Bot", text: "Bot says hello..." },
				]);
			}, 1500);

			return () => clearTimeout(delayTimer);
		}
	}, [messageList]);

	const clickHandlerSendMessage = () => {
		if (inputValue) {
			setMessageList((messageListState) => [
				...messageListState,
				{ author: author, text: inputValue },
			]);
			setInputValue("");
		}
	};

	const keyPressSendMessage = (evt) => {
		if (inputValue && evt.code === "Enter") {
			clickHandlerSendMessage();
		}
	};
	return (
		<>
			{
				//рендерим сообщения
				messageList.map((message, idx) => (
					<Message
						key={`msg_${idx}`}
						text={message.text}
						author={message.author}
					/>
				))
			}
			<Input
				className="MessageList-Input-custom"
				placeholder="...введите текст сообщения"
				value={inputValue}
				onChange={(evt) => setInputValue(evt.target.value)}
				onKeyPress={keyPressSendMessage}
				ref={inputRef}
				fullWidth={false}
				endAdornment={
					<InputAdornment position="end">
						{inputValue && (
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
