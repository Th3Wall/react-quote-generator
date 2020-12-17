import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./quoteBox.scss";

const tweetIt = "https://twitter.com/intent/tweet";

const QuoteBox = ({currentQuote, currentGradient}) => {

  let encodedTweet = encodeURIComponent('"'+ currentQuote.quote +'" - '+currentQuote.author)
  let composedTweetUrl = `${tweetIt}?text=${encodedTweet}`;

  return (
    <div className="quote__wrp">
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
            <a href={composedTweetUrl} target='_blank' rel="noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                className="quote__tweet"
              />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;