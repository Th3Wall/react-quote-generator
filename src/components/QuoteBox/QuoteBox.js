import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"
import "./quoteBox.scss";

const QuoteBox = ({currentQuote, currentGradient, ...props}) => {
  return (
    <motion.div 
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="quote__wrp">
      <div className="quote__content">
        <div className="quote__sentence">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="lg"
            className="quote__icon"
            style={{color: `${currentGradient.color1}`}}
          />
          <p>{currentQuote.quote}</p>
        </div>
        <div className="quote__footer" style={{background: `linear-gradient(to bottom right, ${currentGradient.color1}, ${currentGradient.color2}`}}>
          - {currentQuote.author}
          <button>
            <a href={props.composedTweetUrl} target='_blank' rel="noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                className="quote__tweet"
              />
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default QuoteBox;