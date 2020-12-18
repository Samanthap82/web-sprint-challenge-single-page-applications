import React from 'react'

const Order = (props) => {
    return (
        <div>
            <p>{props.details.name}</p>
            <p>{props.details.size}</p>
            {props.details.pepperoni && <p>{props.details.pepperoni}</p>}
            {props.details.chicken && <p>{props.details.chicken}</p>}
            {props.details.sausage && <p>{props.details.sausage}</p>}
            {props.details.veggies&& <p>{props.details.veggies}</p>}
            <p>Extra Cheese?{props.details.extraCheese}</p>
            <p>{props.details.instructions}</p>
            
        </div>
    )
}

export default Order
