import React from "react";
import "./App.css";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={isLoggedIn => (isLoggedIn ? "Bob" : "Guest")} /> */}
    </div>
  );
}

export default App;
