import './floatingButton.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

const FloatingButton = (props) => {
    return (
        <div
            className="flbtn"
            onClick= {() => props.triggerChange()}
            style={{background: `linear-gradient(to bottom right, ${props.currentGradient.color1}, ${props.currentGradient.color2}`}}
        >
            <FontAwesomeIcon
                icon={faRandom}
                size="2x"
                className="random__icon"
            />
        </div>
    )
}

export default FloatingButton;