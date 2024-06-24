import React from 'react';
import { useNavigate } from 'react-router';
import {motion,useTime,useTransform} from 'framer-motion';
import SlideToOrder from './SlideToOrder';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  const navigate = useNavigate();


  const onConfirmHandler=()=>{
    navigate('/order');
  };

  return (
    <div className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              whileHover={{scale:1.3,originX:0,color:"yellow"}}
              transition={{type:'spring' ,stiffness:300}}
            key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>



      
        <SlideToOrder onConfirm={onConfirmHandler}></SlideToOrder>
   

    </div>
  )
}

export default Toppings;