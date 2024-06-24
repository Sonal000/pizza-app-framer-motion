import React from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


export const Modal = ({showModal,setShowModal}) => {

    const backdrop ={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1
        }
    }
    const modal ={
        hidden:{
            opacity:0,
            y:'-100vh'
        },
        visible:{
            opacity:1,
            y:'200px',
            transition:{
                delay:0.5
            }

        }
    }

  return (
    <AnimatePresence >
        {showModal && (
            <motion.div className='backdrop'
                variants={backdrop}
                initial='hidden'
                animate='visible'
            >
                <motion.div className='modal'
                    variants={modal}
                > 
                    <p>Want to make  another PIZZA</p>
                    <Link to="/">
                    <button
                     onClick={()=>{setShowModal(false)}}
                     >
                        Start Again
                    </button>
                    </Link>
                </motion.div>
            </motion.div>
        )}


    </AnimatePresence>
  )
}

export default Modal;