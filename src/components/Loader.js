    import React from 'react';
import {motion,useCycle} from 'framer-motion';


const containerVariants ={
    animationOne:{
        x:[-20,20,-20],
        y:[0,-30,0],
        transition:{
            x:{
                duration:0.76,
                repeat:Infinity,
                ease:'easeInOut'
            },
            y:{
                duration:0.38,
                repeat:Infinity,
                ease:'easeInOut'
            }

        }
    },
    animationTwo:{
        x:0,
        y:[0,-30,0],
        transition:{
            y:{
                duration:0.38,
                repeat:Infinity,
                ease:'easeInOut'
            }
    }
    }
}



const Loader = () => {

    const [animation,cycleAnimation] =useCycle("animationOne","animationTwo");

  return (
    <>
    <motion.div className='loader'
        variants={containerVariants}
        animate={animation}
        ></motion.div>
    <div onClick={()=>cycleAnimation()}>
        cycle click
    </div>
        </>
  )
}

export default Loader