import React, {useState} from 'react'
import App from './App.js'
function Apps() {
    const [tab,settab] = useState([
        { id:0 , value:4 },
        { id:1 , value:0 },
        { id:2 , value:0 },
        { id:3 , value:0 }
    ])
    let wiecej = 0
    const Usuwanie = (id) => {
        const x = tab.filter(item => item.id !== id)
        settab( x )
    }

    return (
        <div>
            <p>Wybranych produktów: {wiecej}</p>
            { tab.map( jeden =>(
                <App key={jeden.id} onDelete={Usuwanie} id={jeden.id} value={jeden.value}/>
            ) ) }
        </div>
    )
}

export default Apps
