import ReactDOM from "react-dom/client";
import { useState } from "react";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0]);
  //Array(anecdotes.length).fill(0) Tambien se puede crear un nuevo array, darle su length y hacerle .fill para rellenar desde 0
  const [best, setBest] = useState(0);

  const handleSelect = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const newVotes = [...vote];
    newVotes[selected] += 1;
    setVote(newVotes);
    setBest(newVotes.indexOf(Math.max(...newVotes)));
  };

  const mostVoted = Math.max(...vote);

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <div>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleSelect}>Next anecdote</button>
      </div>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[best]}</p>
      <p>has {mostVoted} votes</p>
    </div>
  );
};

export const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <App anecdotes={anecdotes} />
);
