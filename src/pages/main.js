import ContactItem from "../components/contactItem"
import ContactList from "../components/contactList"
import Header from "../components/header"
import Spinner from "../components/spinner"


const Main = (props) => {
    const { contacts, process, search, deleteContacts, setSearch } = props

    return (
        <>
            <div className="container">
                <Header setSearch={setSearch} />
                {
                    process === 'loading' ? <Spinner />
                        :
                        process === 'error' ? <h1 style={{ textAlign: 'center' }}>Что-то пошло нетак</h1>
                            :
                            contacts.length < 1
                                ?
                                <h1 style={{ textAlign: 'center' }}>Нет Контактов</h1>
                                :
                                search
                                    ?
                                    contacts.map((item, i) => {
                                        return (
                                            <ContactItem key={i} deleteContacts={deleteContacts} info={item} />
                                        )
                                    })
                                    :
                                    <ContactList {...props} />
                }
            </div>
        </>
    )
}

export default Main