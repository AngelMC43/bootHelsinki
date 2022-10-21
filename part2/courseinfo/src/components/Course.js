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
      <ul>
        {courses[0].parts.map((course) => (
          <li key={course.id}>
            {course.name} {course.exercises}
          </li>
        ))}
      </ul>
    </>
  );

  const Total = ({ courses }) => {
    const sum = courses[0].parts.reduce(
      (previousValue, currentValue) => previousValue + currentValue.exercises,
      0
    );

    return (
      <>
        <p>
          <b>Total of {sum}</b>
        </p>
      </>
    );
  };

  const MoreContent = ({ courses }) => {
    return (
      <>
        <h3>
          <b>{courses[1].name}</b>
        </h3>
        <ul>
          {courses[1].parts.map((course) => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      </>
    );
  };

  const TotalMore = ({ courses }) => {
    const sum = courses[1].parts.reduce(
      (previousValue, currentValue) => previousValue + currentValue.exercises,
      0
    );

    return (
      <>
        <p>
          <b>Total of {sum}</b>
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
      <MoreContent courses={courses} />
      <TotalMore courses={courses} />
    </>
  );
};

export default Course;
