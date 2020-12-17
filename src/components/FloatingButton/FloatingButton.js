import './floatingButton.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"

const FloatingButton = (props) => {
    return (
        <motion.div
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flbtn"
            onClick= {() => props.triggerChange()}
            style={{background: `linear-gradient(to bottom right, ${props.currentGradient.color1}, ${props.currentGradient.color2}`}}
        >
            <FontAwesomeIcon
                icon={faRandom}
                size="2x"
                className="random__icon"
            />
        </motion.div>
    )
}

export default FloatingButton;