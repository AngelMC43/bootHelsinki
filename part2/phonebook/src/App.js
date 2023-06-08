import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonsForm";
import Person from "./components/Persons";
import noteService from "./services/notes";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    noteService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const deletePerson = (id) => {
    const answer = window.confirm(`Delete ${id.name} ?`);
    answer &&
      noteService.deletePerson(id).then(
        noteService.getAll().then((initialPersons) => {
          setPersons(initialPersons);
        })
      );
  };

  const updatePerson = (id) => {
    const answer = window.confirm(
      `${newName} is already added to the phonebook, replace the old number with a new one?`
    );

    if (answer) {
      const updateNumber = {
        name: newName,
        number: newNumber,
        id,
      };

      noteService.update(id, updateNumber).then((returned) => {
        setPersons(
          persons.map((person) => (person.id === id ? returned : person))
        );
      });
      setNewName("");
      setNewNumber("");
    }
  };

  const addPerson = (e) => {
    e.preventDefault();

    const findPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (findPerson) return updatePerson(findPerson.id);

    const newPerson = {
      name: newName.toLowerCase(),
      number: newNumber,
    };

    noteService.create(newPerson).then(() => {
      setNewName("");
      setNewNumber("");
      alert(
        `${newName} added to the phonebook`,
        setPersons(persons.concat(newPerson))
      );
    });
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
      <Person
        persons={persons}
        newSearch={newSearch}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
