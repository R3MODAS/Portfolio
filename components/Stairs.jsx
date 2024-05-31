import { animate, motion } from "framer-motion"

// variants
const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}

const Stairs = () => {
    return (
        <>
            {/* render 6 motion divs, each representing a step of the stairs 

                Each div will have the same animation defined by stairAnimation
            */}
            
        </>
    )
}

export default Stairs