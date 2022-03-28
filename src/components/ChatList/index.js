import {Chat} from '../Chat';

export const ChatList = ({chats}) =>
    chats.map((chat) => (
        <li key={chat.id} >
            <Chat name={chat.name} />
        </li>
    ));