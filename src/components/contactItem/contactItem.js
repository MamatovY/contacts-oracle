import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosCall } from 'react-icons/io'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'
import './contactItem.scss'
import Modal from '../modal'

const ContactItem = ({ info, deleteContacts }) => {
    const [modal, setModal] = useState(false)

    return (
        <>

            <div className='contactItem'>
                <div className='contactItem__name'>
                    {info.name}
                </div>
                <div className="contactItem__btn">
                    <Link to='/call'>
                        <IoIosCall />
                    </Link>
                    <Link onClick={() => setModal(true)}>
                        <BsFillTrash3Fill />
                    </Link>
                    <Link to={`/editContact/${info.id}`}>
                        <MdEdit />
                    </Link>
                </div>
            </div>
            {modal && <Modal deleteContacts={deleteContacts} info={info} setModal={setModal} />}

        </>
    )
}

export default ContactItem