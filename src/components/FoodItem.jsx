import React from 'react'

const FoodItem = ({ name, img }) => {
  return (
    <div>
    <div>{name}</div>
    <img src={img} alt={name} className="imgItem" />
    </div>
  )
}

export default FoodItem