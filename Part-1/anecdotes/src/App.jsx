import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const points = [0, 0, 0, 0, 0, 0, 0, 0];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);

  const handleNext = () => {
    let number = getRandomInt(8);
    setSelected(number);
  };
  
  const handleVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  };

  const FindHighest = () => {
    let highestVotes = Math.max(...votes);
    let highest = votes.indexOf(highestVotes)
    return (
      <div>
        <p>{anecdotes[highest]}</p>
        <p>has {highestVotes} votes</p>
      </div>
    )
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleNext} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <FindHighest />
    </div>
  );
};

export default App;
