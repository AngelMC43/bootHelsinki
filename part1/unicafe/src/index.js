import ReactDOM from "react-dom/client";
import React, { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handlerGood}>Good</button>
      <button onClick={props.handlerNeutral}>Neutral</button>
      <button onClick={props.handlerBad}>Bad</button>
    </>
  );
};

const Statistic = (props) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              {props.text} {props.value} {props.perc}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Statistics = (props) => {
  const perc = "%";

  return (
    <>
      <h2>Give feedback</h2>

      <Button
        handlerGood={props.handlerGood}
        handlerNeutral={props.handlerNeutral}
        handlerBad={props.handlerBad}
      />

      <h2>Statistics</h2>

      {props.good || props.neutral || props.bad > 0 ? (
        <>
          <Statistic text="Good" value={props.good} />
          <Statistic text="Neutral" value={props.neutral} />
          <Statistic text="Bad" value={props.bad} />
          <Statistic text="All" value={props.all} />
          <Statistic text="Average" value={props.average} />
          <Statistic text="Positive" value={props.positive} perc={perc} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handlerGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const handlerNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handlerBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <Statistics
        handlerGood={handlerGood}
        handlerNeutral={handlerNeutral}
        handlerBad={handlerBad}
        good={good}
        all={all}
        neutral={neutral}
        bad={bad}
        average={average}
        positive={positive}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
