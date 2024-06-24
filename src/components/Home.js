import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import Loader from './Loader';


const Home = () => {

  const buttonVariants ={
    hover:{
      scale: 1.05,
      textShadow:"0px 0px 8px rgb(255,255,255)",
      boxShadow:"0px 0px 8px rgb(255,255,255)",
      transition:{
        repeat: Infinity,
        repeatType:'reverse',
        duration:0.3

      }
    }
  }

  const containerVarients ={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        delay:1,
        duration:2
      }
    },
    exit:{
      x:-10000,
      transition:{ease:"easeInOut"}
    }
  }

  return (


    <motion.div className="home container" 
    variants={containerVarients}
      initial='hidden'
      animate='visible'
      exit='exit'
      >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader></Loader>
    </motion.div>
  )
}

export default Home;