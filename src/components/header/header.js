import { Link } from 'react-router-dom'
import { MdPersonAddAlt1 } from 'react-icons/md'
import './header.scss'

const Header = ({ setSearch }) => {

    return (
        <header className='header'>
            <div className="header__title">
                <h1>Contacts</h1>
                <Link to='/addContact' className="header__title-add">
                    <MdPersonAddAlt1 />
                </Link>
            </div>
            <div className="textInput">
                <input onChange={e => setSearch(e.target.value)} type="text" placeholder='type to find...' />
            </div>
        </header>
    )
}

export default Header