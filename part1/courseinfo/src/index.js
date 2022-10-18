import ReactDOM from "react-dom/client";

const Header = (props) => {
  return <>Course: {props.course} </>;
};

const Part = (props) => {
  return (
    <>
      Name: {props.part.name}, {props.part.exercises} exercises
    </>
  );
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <p key={part.name}>
          <Part part={part} />
        </p>
      ))}
    </>
  );
};

const Total = (props) => {
  const sum =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return <p>Number of exercises: {sum}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
