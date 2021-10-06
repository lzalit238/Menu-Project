import React, {useState} from 'react'
import Item from './Components/Item'
import data from './data'

const App = () => {
    const [item, setItem]=useState(data)
    return (
        <div>
            <h1 className='heading'>Our Menu</h1>
            <Item item={item}/>
        </div>
    )
}

export default App
