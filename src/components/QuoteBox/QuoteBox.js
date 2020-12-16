import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./quoteBox.scss";

const tweetIt = "https://twitter.com/intent/tweet";
const quotes = [
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    quote: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  {
    quote: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
  },
  {
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse",
  },
  {
    quote: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "We become what we think about.",
    author: "Earl Nightingale",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    author: "Mark Twain",
  },
];

const colorPairings = [
  {
    "color1": "#facc15",
    "color2": "#f97316"
  },
  {
    "color1": "#4ade80",
    "color2": "#06b6d4"
  },
  {
    "color1": "#a855f7",
    "color2": "#6366f1"
  }
]

export default function QuoteBox() {

  const [currentQuote, setCurrentQuote] = useState("");
  let randomize = Math.floor(Math.random() * colorPairings.length);

  const handleChange = () => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <div className="quote__wrp">
      <div className="quote__content">
        <div className="quote__sentence">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="lg"
            className="quote__icon"
            style={{color: `${colorPairings[randomize].color1}`}}
          />
          <p>{currentQuote.quote}</p>
        </div>
        <div className="quote__footer" style={{background: `linear-gradient(to bottom right, ${colorPairings[randomize].color1}, ${colorPairings[randomize].color2}`}}>
          - {currentQuote.author}
          <button>
            <a href={`${tweetIt}?text="${currentQuote.quote}" - ${currentQuote.author}`} target='_blank' rel="noreferrer">
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
