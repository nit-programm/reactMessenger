import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import {Chat} from "../Chat";
import {ChatList} from "../ChatList";
import { Profile } from "../Profile";

export const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink style={({isActive}) => ({color: isActive ? 'green' : 'gray'})} to="/">Profile</NavLink>
            </div>
            <div>
                <Link to="/chats">Chats</Link>
            </div>
            <Routes>
                <Route path="/" element={<Profile src="https://picsum.photos/100/100"/>}/>
                <Route path="chats" element={<ChatList/>}>
                    <Route path=":chatId" element={<Chat/>}/>
                </Route>
                <Route path="*" element={<h2>404</h2>}/>
            </Routes>
        </BrowserRouter>
    );
};