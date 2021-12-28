import React, { useEffect } from 'react';

function App(){

    useEffect(() => {

    },[])

    const test = () => {
        console.log('test')
    }

    return (
        <div onClick={test}>App Page</div>
    )
}

export default App;