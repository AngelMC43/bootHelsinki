import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <p>Course: {props.course} </p>;
};

const Content = (props) => {
  return (
    <div>
      <Part1 part1={props.part1} exercises1={props.exercises1} />
      <Part2 part2={props.part2} exercises2={props.exercises2} />
      <Part3 part3={props.part3} exercises3={props.exercises3} />
    </div>
  );
};

const Part1 = (props) => {
  return (
    <p>
      Part 1: {props.part1}, {props.exercises1} exercises
    </p>
  );
};

const Part2 = (props) => {
  return (
    <p>
      Part 2: {props.part2}, {props.exercises2} exercises
    </p>
  );
};
const Part3 = (props) => {
  return (
    <p>
      Part 3: {props.part3}, {props.exercises3} exercises
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises: {props.sum}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const sum = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total sum={sum} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
