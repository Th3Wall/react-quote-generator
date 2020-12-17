import React, { useEffect, useState } from "react";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import "./App.css";

const quotesGist = "https://gist.githubusercontent.com/Th3Wall/8d9d6adb080e04ee6e5fcae2707fdde2/raw/90eb9489b774d5da82675b35936260ce9d0327ce/quotes.json";
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
  },
  {
    "color1": "#ec4899",
    "color2": "#f43f5e"
  },
  {
    "color1": "#fb923c",
    "color2": "#db2777"
  },
  {
    "color1": "#38bdf8",
    "color2": "#6366f1"
  },
  {
    "color1": "#22d3ee",
    "color2": "#0ea5e9"
  }
]

const App = () => {

  const [currentQuote, setCurrentQuote] = useState("");
  const [currentGradient, setCurrentGradient] = useState([]);

  const getQuotes = () => {
    fetch(quotesGist)
      .then(res => res.json())
      .then(
        (result) => {
          setCurrentQuote(result.quotes[Math.floor(Math.random() * result.quotes.length)]);
        },
        (error) => {
          console.log(error);
        }
      )

    setCurrentGradient(colorPairings[Math.floor(Math.random() * colorPairings.length)]);
  }

  const triggerChange = () => {
    getQuotes();
  }

  useEffect(() => {
    getQuotes();
  }, []);


  return (
    <div className="App">
      <FloatingButton triggerChange={triggerChange} currentGradient={currentGradient} />
      <QuoteBox currentQuote={currentQuote} currentGradient={currentGradient} />
    </div>
  );
};

export default App;
