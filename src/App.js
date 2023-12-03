import { useState } from 'react'
import './App.css';

const style = {fontSize: "24px", margin: "12px"};

const Button = ({ handleClick, name }) => {
    console.log(`${name} rendered`)
    return <button style={style} onClick={handleClick}>{name}</button>
}

export default function App() {

    console.log('counter rendered')
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    return (
        <div className='App'>
            <p style={style} >{countOne}</p>
            <p style={style} >{countTwo}</p>

            <Button handleClick={() => setCountOne(countOne + 1)} name="+1" />
            <Button handleClick={() => setCountTwo(countTwo - 1)} name="-1" />
        </div>
    )
}