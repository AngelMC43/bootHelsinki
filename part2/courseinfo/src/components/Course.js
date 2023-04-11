import React from "react";

const Course = ({ courses }) => {
  const Title = () => (
    <h1>
      <b>Web development curriculum</b>
    </h1>
  );

  const Header = ({ courses }) => (
    <h3>
      <b>{courses[0].name}</b>
    </h3>
  );

  const Content = ({ courses }) => (
    <>
      {courses[0].parts.map((course) => (
        <p key={course.id}>
          {course.name} {course.exercises}
        </p>
      ))}
    </>
  );

  const Total = ({ courses }) => {
    const sum = courses[0].parts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises,
      0
    );

    return (
      <>
        <p>
          <b>Total of {sum} exercises</b>
        </p>
      </>
    );
  };

  const ExtraContent = ({ courses }) => {
    return (
      <>
        <h3>
          <b>{courses[1].name} </b>
        </h3>

        {courses[1].parts.map((course) => (
          <p key={course.id}>
            {course.name} {course.exercises}
          </p>
        ))}
      </>
    );
  };

  const TotalExtraContent = ({ courses }) => {
    const sum = courses[1].parts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises,
      0
    );

    return (
      <>
        <p>
          <b>Total of {sum} exercises</b>
        </p>
      </>
    );
  };

  return (
    <>
      <Title courses={courses} />
      <Header courses={courses} />
      <Content courses={courses} />
      <Total courses={courses} />
      <ExtraContent courses={courses} />
      <TotalExtraContent courses={courses} />
    </>
  );
};

export default Course;
