import ChatHeader from "./ChatHeader"
import ChatDisplay from "./ChatDisplay"
import MatchesDisplay from "./MatchesDisplay"

function ChatContainer({user}) {
    return (
        <div className="chat-container">
            <ChatHeader user={user}/>
            <div>
                <button className="option">Matches</button>
                <button className="option">Chat</button>
            </div>
            <MatchesDisplay matches={user.matches}/>
            <ChatDisplay/>
        </div>
    )
}

export default ChatContainer