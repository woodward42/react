import "./Message.css";
import { memo } from "react";

export const Message = memo(({ message }) => {
	const { author, value } = message;

	return (
		<div
			className="Message-wrapper"
			style={{ alignItems: author === "Bot" ? "flex-end" : "" }}
		>
			<p className="Message-text">
				<span className="Message-author">Автор сообщения:</span>{" "}
				{author}
			</p>
			<p className="Message-text">
				<span className="Message-author">Сообщение:</span> {value}
			</p>
		</div>
	);
});
