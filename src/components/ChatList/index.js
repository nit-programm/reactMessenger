import { Link, Outlet } from "react-router-dom"

const chats = [
    {id: 'chat1', name: 'Chat1'},
    {id: 'chat2', name: 'Chat2'},
    {id: 'chat3', name: 'Chat3'},
  ]

export const ChatList = () => (
    <>
        <ul className="chatList">
            {chats.map((chat) => (
                <li key={chat.id}>
                    <Link to={`/chats/${chat.id}`}>
                        {chat.name}
                    </Link>
                </li>
            ))}
        </ul>
        <Outlet/>
    </>
)
