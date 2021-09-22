import React from 'react'

const Item = (data) => {
    const {id, title, category, price, img, desc} = data
    return (
        <>
            <div key={id}>
                <img src={img} alt={title} />
                <h2>{title}</h2>
                <sup>${price}</sup>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default Item
