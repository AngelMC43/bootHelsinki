import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonsForm";
import Person from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const newNote = { name: newName, number: newNumber, id: persons.length + 1 };

  const addPerson = (e) => {
    e.preventDefault();

    persons.find((person) => person.name === newName)
      ? alert(`${newName} already exists`)
      : alert(
          `${newName} added to the phonebook`,
          setPersons(persons.concat(newNote))
        );
    setNewName("");
    setNewNumber("");
  };

  const handleNoteChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setNewSearch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newSearch={newSearch}
        handleSearch={handleSearch}
        persons={persons}
      />

      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNoteChange={handleNoteChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Person persons={persons} newSearch={newSearch} />
    </div>
  );
};

export default App;
