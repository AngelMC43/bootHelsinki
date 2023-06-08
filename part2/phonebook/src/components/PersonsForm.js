export default function PersonsForm({
  addPerson,
  newName,
  newNumber,
  handleNoteChange,
  handleNumberChange,
}) {
  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          Name:
          <input type="text" onChange={handleNoteChange} value={newName} />
        </div>

        <div>
          <div>
            Number:
            <input
              type="text"
              onChange={handleNumberChange}
              value={newNumber}
            />
          </div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}
