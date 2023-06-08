import "./main.css";

export default function Person({ persons, newSearch, deletePerson }) {
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
