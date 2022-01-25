import React, { useState } from 'react'

/*const SetValue = (event) => {
  console.log(event.target.value)

}*/

const AssignValue = ({text, value, setValue}) => {
  return (
    <div>
      {text} <input value={value} onChange={setValue} />
    </div>
  )
}

const PersonForm = ({addContact, text1, newName, assignNewName, text2, newNum, assignNewNum}) => {
  return(
    <form onSubmit={addContact}>
      <AssignValue text={text1} value={newName} setValue={assignNewName} />
      <AssignValue text={text2} value={newNum} setValue={assignNewNum} />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({persons}) => {
  return (
    <ul>
      {persons.map(person =>
        <p key={person.id}>{person.name} {person.number}</p>  
      )}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [searchName, setSearchName] = useState('')

  //filtering the persons array with the given search string
  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

  const addContact = (event) => {
    event.preventDefault()
     
    const nameObject = {
      name: newName,
      number: newNum,
      id: persons.length + 1
    }

    const nameArr = persons.map(person => person.name)

    if (nameArr.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject));
    }
    setNewName('')
    setNewNum('')
  }


  const assignNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const assignNewNum = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const assignSearch = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <AssignValue text="filter shown with:" value={searchName} setValue={assignSearch} />
      
      <h2>Add a new</h2>
      
      <PersonForm addContact={addContact} 
        text1="name:" newName={newName} assignNewName={assignNewName}
        text2="number:" newNum={newNum} assignNewNum={assignNewNum} 
      />
      
      <h2>Numbers</h2>
      
      <Persons persons={namesToShow}/>
    </div>
  )
}

export default App