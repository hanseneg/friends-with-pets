import React from 'react'
import Friend from './Friend'
import friends from './FriendList'

function App() {
    const friendsMapped = friends.map(friend => <Friend {...friend}/>)
    return (
        <div>
            {friendsMapped}
        </div>
    )
}

export default App 