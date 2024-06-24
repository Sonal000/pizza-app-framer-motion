import React from 'react';
import {motion, useAnimation,useTransform,useMotionValue} from 'framer-motion'

const SlideToOrder = ({onConfirm}) => {

    const controls = useAnimation();

    const RIGHT_OFFSET =220;
    const offset = useMotionValue(0);
    // offset.onChange((val)=>{
    //   console.log(val)
    // })
    const opacity = useTransform(offset,[0,RIGHT_OFFSET],[1,0.1]);
    const color=useTransform(offset,[0,150,RIGHT_OFFSET],['#aeb2ff','#ffdc74','#7de198'])




    const onPanHandler=(event,info)=>{
      const X = info.offset.x;
      if(X>0){
        controls.set({x:X>RIGHT_OFFSET?RIGHT_OFFSET:X})
      }
    }
    const onPanEndHandler=(event,info)=>{
      if(info.offset.x>=RIGHT_OFFSET){
        onConfirm();
      }else{
        controls.start({x:0});
      }
    }



  return (
    <>
        <motion.div className='slider'
          style={{background:color}}
        >
            <motion.label
              animate={{scale:[1,1.03,1]}}
              transition={{repeat:Infinity}}
              style={{opacity}}
            >Slide to Order</motion.label>
            <motion.div 
            animate={controls}
            onPan={onPanHandler}
            onPanEnd={onPanEndHandler}
            style={{
              x:offset
            }}
            className='toggle'>&#187;</motion.div>
        </motion.div>
    
    </>
  )
}

export default SlideToOrder;