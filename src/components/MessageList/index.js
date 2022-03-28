import { Message } from "../Message"

export const MessageList = ({messages}) =>
    messages.map((message) => (
        <div key={message.id} >
            <Message text={message.text} author={message.author} />
        </div>
    ));