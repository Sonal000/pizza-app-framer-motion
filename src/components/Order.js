import React from 'react';
import {motion} from 'framer-motion';
import { useEffect } from 'react';

const containerVariants ={
  hidden:{
    x:'100vw',
    opacity:0
  },
  visible:{
    x:0,
    opacity:1,
    transition:{
      // delay:0.5,
      type:'spring',
      mass:0.4,
      damping:8,
      when:"beforeChildren",
      staggerChildren:0.4
    },
  }
};

const childrenVariants ={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
  }
}

const Order = ({ pizza ,setShowModal }) => {


  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true);
    },5000)
  },[setShowModal])



 


  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >

  
        <h2>Thank you for your order </h2>
      <motion.div
        variants={childrenVariants}
      >
       <p>You ordered a {pizza.base} pizza with:</p>
      </motion.div>
      {pizza.toppings.map(topping => <motion.div
        variants={childrenVariants}
      key={topping}>{topping}</motion.div>)}
    </motion.div>
  )
}

export default Order;