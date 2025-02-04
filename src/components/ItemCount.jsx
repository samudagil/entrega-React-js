import React, { useState } from 'react'
import './ItemCount.css';

const ItemCount = ({initializaValue,stock}) => {
    const [count, setCount] = useState(initializaValue)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    
    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    const onAdd = (count) => {
        console.log(`Se agregaron ${count} productos al carrito`)
    }

    return (
        <div>
            <div className='card'> 
                <div className='button'>
                    <button onClick={decrement} disabled={count <= 1}>-</button>
                </div>
            <span className='number'>{count}</span>
                <div className='button'>
                    <button onClick={increment} disabled={count >= stock}>+</button>
                </div>
                <div className='button'>
                    <button onClick={() => onAdd(count)} disabled={stock === 0}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount