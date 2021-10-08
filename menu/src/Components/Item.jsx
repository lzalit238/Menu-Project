import React from 'react'

const Item = ({item}) => {
    return item.map((meal) => {
        const { id, title, category, price, img, desc } = meal
        console.log(img);
    return (
        <>
            <div key={id} className='container'>
                <img src={img} alt={title} />
                <h2>{title}</h2>
                <sup>${price}</sup>
                <hr/>
                <p>{desc}</p>
            </div>
        </>
    )
    })
}

export default Item
