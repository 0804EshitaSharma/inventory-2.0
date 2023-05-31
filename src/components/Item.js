import React from 'react'

function Item({name,price,description,url}) {
  return (
    <div>
        <ul>
            <li>{name}</li>
            <li>{price}</li>
            <li>{description}</li>
            <li><img src={url}></img></li>
        </ul>
        <button>Delete</button>
    </div>
  )
}

export default Item