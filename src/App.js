import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import useBookService from './components/services/bookService'
import { Main, AddPage, EditPage } from './pages'

function App() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')
  const { process, getAllContacts, setProcess } = useBookService()

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('contacts'));
    if (!local) {
      getAllContacts()
        .then(res => update(res.sort((obj1, obj2) => obj1.name.toUpperCase() < obj2.name.toUpperCase() ? -1 : 1)))
    } else if (local.length > 0) {
      setProcess('finish')
      setContacts(local.sort((obj1, obj2) => obj1.name.toUpperCase() < obj2.name.toUpperCase() ? -1 : 1))
    }
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('contacts'));
    if (local) {
      setProcess('finish')
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts, setProcess]);

  const update = (data) => {
    localStorage.setItem('contacts', JSON.stringify(data));
    setContacts(data)
  }

  const getContact = (id) => {
    //eslint-disable-next-line
    const item = contacts.filter(item => item.id == id)
    return item
  }

  const editContact = (id, name, phone) => {
    const newContacts = contacts.map((item) => {
      //eslint-disable-next-line
      if (item.id == id) {
        return { ...item, name, phone }
      }
      return item
    })
    setContacts(newContacts)
  }

  const deleteContacts = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
  }

  const addContact = (contact) => {
    const newContacts = [...contacts, contact]
    setContacts(newContacts.sort((obj1, obj2) => obj1.name.toUpperCase() < obj2.name.toUpperCase() ? -1 : 1))
  }

  const searchContact = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.name.toUpperCase().indexOf(term.toUpperCase()) > -1
    })
  }

  const visibleData = searchContact(contacts, search)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Main setSearch={setSearch} search={search} deleteContacts={deleteContacts} process={process} contacts={visibleData} />
          } />
          <Route path='/addContact' element={<AddPage addContact={addContact} />} />
          <Route path='/editContact/:id' element={<EditPage deleteContacts={deleteContacts} editContact={editContact} getContact={getContact} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
