import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import './singlePage.scss'
import { BiLeftArrowAlt } from 'react-icons/bi'
import img from './../assets/img/congratulations.svg'



const AddPage = ({ addContact }) => {
    const [finish, setFinish] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')


    const saveContact = (e) => {
        e.preventDefault()
        const id = uuidv4()
        addContact({ id, name, phone })
        setFinish(true)
    }

    return (
        <>
            <div className='singlePage container'>
                <div className="singlePage__head">
                    <Link to='/' className="singlePage__head-back">
                        <BiLeftArrowAlt />
                    </Link>
                    <h2 className="singlePage__head-title">
                        Add Contact
                    </h2>

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
                    <button disabled={finish}>Save</button>
                </form>

                <div className={finish ? 'singlePage__finish active' : 'singlePage__finish'}>
                    <div className="container">

                        <div className="singlePage__finish-img">
                            <img src={img} alt="" />
                        </div>
                        <h2 >
                            Congratulations!
                        </h2>
                        <div className="singlePage__finish-title">
                            Your new contact: {name} has been created!
                        </div>
                        <Link to='/' className="singlePage__finish-btn">
                            Back to home
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddPage