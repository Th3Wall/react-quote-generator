import "./App.css";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import QuoteBox from "./components/QuoteBox/QuoteBox";

const quotesGist =
  "https://gist.githubusercontent.com/Th3Wall/8d9d6adb080e04ee6e5fcae2707fdde2/raw/90eb9489b774d5da82675b35936260ce9d0327ce/quotes.json";
// background: linear-gradient(to bottom right,#facc15,#f97316);
// background: linear-gradient(to bottom right,#4ade80,#06b6d4);
// background: linear-gradient(to bottom right,#a855f7,#6366f1);

const App = () => {
  return (
    <div className="App">
      <FloatingButton />
      <QuoteBox />
    </div>
  );
};

export default App;
