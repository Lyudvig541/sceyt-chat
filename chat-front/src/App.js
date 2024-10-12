import './App.css';
import Login from "./components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Chat from "./components/Chat";
import NotFound from "./components/NotFound";
import { Provider } from 'react-redux';
import store from './store/store';
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:5000')
function App() {
    return (
        <Provider store={store}>

        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="chat" element={<Chat socket={socket}/>} />
                    <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
        </Provider>
    );
}

export default App;
