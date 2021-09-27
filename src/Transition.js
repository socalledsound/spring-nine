import { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'

const Transition = ({nums}) => {

        const [items, setItems] = useState(null)
      
        useEffect(() => {
          setTimeout(() => setItems(nums), 100)
        })
      
        console.log(items)
        // const transition = useTransition(isVisible, (p) => p, {
        //   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
        // })
        // const transition = useTransition(isVisible,{
        //   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
        //   config: config.molasses,
        //   delay: 1000,
        // })
      
        const transitions = useTransition(items,{
          from: { opacity: 0},
          enter: { opacity: 1},
          leave: { opacity: 0},
          config: {duration: 10000},
          delay: 1000,
        })
      
        // console.log(transition)
        return ( 
          <div className="app">
            <button >mount</button>
            <div className="container">
              {
                transitions((style, item, key) => 
              
                item ? <animated.div className='item' style={style}>
                    {item}
                </animated.div>
                : 
                
                ''
                )
              }
      
            </div>
          </div>
         );
      
}
 
export default Transition;