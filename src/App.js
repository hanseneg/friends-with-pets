import React from "react"
import Friend from "./Friend"
import friends from "./FriendList"

function App() {
    const friendsMapped = friends.map(friend => <Friend friends={friend}/>)
    return (
        <div>
            {friendsMapped}
        </div>
    )
}

export default App 