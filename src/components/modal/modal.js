import './modal.scss'
import img from './../../assets/img/deleteModal.svg'

const Modal = ({ info, setModal, deleteContacts }) => {
    return (
        <>
            <div onClick={() => { setModal(false) }} className="modal__background"></div>
            <div className='modal'>
                <div className="modal__img">
                    <img src={img} alt="" />
                </div>
                <div className="modal__title">
                    Are you sure you want to delete {info.name}?
                </div>

                <div
                    onClick={() => {
                        deleteContacts(info.id)
                        setModal(false)
                    }}
                    className="modal__delete">
                    Delete
                </div>
                <div onClick={() => { setModal(false) }} className="modal__cancel">
                    Cancel
                </div>
            </div>
        </>
    )
}

export default Modal