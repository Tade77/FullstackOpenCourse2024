import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Statistics from "./Components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  const all = [good + neutral + bad];
  const average = all.map((all) => (all / (all * 2)).toFixed(1));
  const positive = all.map((all) => ((good / all) * 100).toFixed(3));
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <h1>Statistics</h1>
      <Statistics
        all={all}
        good={good}
        bad={bad}
        neutral={neutral}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
