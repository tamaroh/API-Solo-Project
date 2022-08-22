import React from 'react'

const App = async () => {
    const data = await fetch("http://localhost:3000").then(res => console.log(res));
    console.log(data)
    return (
        <h1>Hello World!</h1>
    )
}

export default App