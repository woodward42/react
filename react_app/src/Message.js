import './Message.css'

export function Message(props) {

    const { text } = props;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '90%', padding: '10px', backgroundColor: '#105264'}}>
            <p className="Message-text">{text}</p>
        </div>
    );
}

//export default Message;