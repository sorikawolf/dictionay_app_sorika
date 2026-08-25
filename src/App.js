import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to my dictionary app!</header>
      <Dictionary defaultKeyword="hello" />
      <footer>
        Coded by Sorika Wolf and open-sourced on{" "}
        <a
          href="https://github.com/sorikawolf/dictionay_app_sorika"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
