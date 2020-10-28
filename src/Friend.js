import React from 'react'
import Pet from './Pet'

function Friend(props) {
    const petInfo = props.pets.map(pets => <Pet name={pets.name} breed={pets.breed} />)
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <h2>Pets</h2>
            <hr></hr>
            <p>{petInfo}</p>
        </div>
    )
}

export default Friend

