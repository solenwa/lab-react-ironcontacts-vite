import './App.css'
import contacts from './contacts.json'
import { useState } from 'react'

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0,5));
  const [allContacts, setAllContacts] = useState(contacts)

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * allContacts.length)
    const randomContact = allContacts[randomIndex]
    const isDuplicateContact = firstFive.some(contact => contact.id === randomContact.id)
    if (!isDuplicateContact) {
      const updatedContacts = [...firstFive, randomContact];
      setFirstFive(updatedContacts);
    }
  }

  const sortByPopularity = () => {
    const sortedByPopularity = [...firstFive].sort((a, b) => b.popularity - a.popularity);
    setFirstFive(sortedByPopularity)
  }

  const sortByName = () => {
    const sortedByName = [...firstFive].sort((a, b) => a.name.localeCompare(b.name));
    console.log(sortedByName)
    setFirstFive(sortedByName)
  }

  const deleteButton = (contactId) => {
    const updatedContacts = [...firstFive].filter()
  }

  return (
    <div className='App'>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <button onClick={sortByName}>Sort By Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
            {firstFive.map(currentContact => {
              return (
                <tr>
                  <td><img src={currentContact.pictureUrl} alt="Contact's photo" height='150px'></img></td>
                  <td>{currentContact.name}</td>
                  <td>{Math.round(currentContact.popularity*100) / 100}</td>
                  {currentContact.wonOscar ? <td> 🏆</td> : <td></td>}
                  {currentContact.wonEmmy ? <td> 🏆</td> : <td></td>}
                  <button onClick={() => deleteButton(currentContact.id)}>Delete</button>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default App