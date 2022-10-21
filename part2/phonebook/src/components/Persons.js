export default function Person({ persons, newSearch }) {
  return (
    <>
      <ul>
        {persons
          .filter((person) => person.name.toLowerCase().includes(newSearch))
          .map((user) => (
            <li key={user.id}>
              {user.name} {user.number}
            </li>
          ))}
      </ul>
    </>
  );
}
