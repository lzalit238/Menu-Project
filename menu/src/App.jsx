import React, {useState} from 'react'
import Item from './Components/Item'
import data from './data'

const App = () => {
    const [item, setItem]=useState(data)
    return (
        <div>
            <h1>Our Menu</h1>
            <Item data={data}/>
        </div>
    )
}

export default App
