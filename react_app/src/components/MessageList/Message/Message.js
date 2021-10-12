import './Message.css'

export function Message({ author, text }) {

    return (
        <div className="Message-wrapper">
            <p className="Message-text"><span className="Message-author">Автор сообщения:</span> {author}</p>
            <p className="Message-text"><span className="Message-author">Сообщение:</span> {text}</p>
        </div>
    );
}

//export default Message;