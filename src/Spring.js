// import { useState} from 'react'
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const styles = {
    container: {
        display: 'flex', flexDirection: 'column', marginTop: '4rem'
    },
    button: {
        width: '10rem', margin: '0 auto'
    },
    content: {
        width: '10rem', 
        margin: '0 auto',
        padding: '4rem',
        marginTop: '1.2rem',
        backgroundColor: 'blue',
        borderRadius: '1.2rem',
        color: 'white',
    },

}


const Spring = () => {

    const [toggle, setToggle ] = useState(false)

    const animatedStyle = useSpring({ opacity : toggle ? 1 : 0,  config: {duration: 10000}})

    useEffect(() => {
        if(!toggle){
            setToggle(true)
        }
        
    }, [toggle])


    return ( 
        <div style={{...styles.container}}>
            {/* <button onClick={() => setToggle(!toggle)} style={{...styles.button}}>click me</button> */}
            <animated.div style={{...styles.content, ...animatedStyle}}>some content here</animated.div>
        </div>
     );
}
 
export default Spring;