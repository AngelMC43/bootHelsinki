import "./main.css";

export default function Person({ persons, newSearch, deletePerson }) {
  // const dletePerson = (user) => {
  //   const personToDelete = persons.find((person) => person.id === user.id);
  //   const decision = window.confirm(`Delete ${personToDelete.name}`);
  //   if (decision) return deletePerson;
  //   console.log("aa", window.confirm());
  // };

  return (
    <>
      <ul>
        {persons.map((user, i) => (
          <li key={user.id}>
            {user.name} {user.number}{" "}
            <button
              className="buttonDel"
              onClick={() => {
                deletePerson(user);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
