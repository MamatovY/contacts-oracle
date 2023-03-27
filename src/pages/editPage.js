import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { BiLeftArrowAlt } from 'react-icons/bi'
import { BsFillTrash3Fill } from 'react-icons/bs'


const EditPage = ({ editContact, getContact, deleteContacts }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const item = getContact(id)[0]

        if (item) {
            if (item.name) {
                setName(item.name)
                setPhone(item.phone)
            }
        }
    }, [getContact, id])

    const saveContact = (e) => {
        e.preventDefault()
        editContact(id, name, phone)
        navigate('/')
    }
    return (
        <div className='singlePage container'>
            <div className="singlePage__head">
                <Link to='/' className="singlePage__head-back">
                    <BiLeftArrowAlt />
                </Link>
                <h2 className="singlePage__head-title">
                    Edit Contact
                </h2>
                <div
                    onClick={() => {
                        deleteContacts(id)
                        navigate('/')
                    }}
                    className="singlePage__head-delete">
                    <BsFillTrash3Fill />
                </div>
            </div>
            <form onSubmit={saveContact}>
                <label htmlFor="name">Name:</label>
                <div className="textInput">
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        name='name'
                        type="text" />
                </div>

                <label htmlFor="phone">Phone:</label>
                <div className="textInput">
                    <input
                        value={phone}
                        name='phone'
                        type='text'//text потому что с сервера приходит строка
                        onChange={e => setPhone(e.target.value)}
                        required />
                </div>
                <button>Save Contact</button>
            </form>

        </div>
    )
}

export default EditPage