import React from 'react'

const FoodItem = ({ nom, img }) => {
  return (
    <div>
    <div>{nom}</div>
    <img src={img} alt={nom} className="imgItem" />
    </div>
  )
}

export default FoodItem