import { useEffect, useState } from 'react';
import ContactItem from '../contactItem';
import './contactList.scss'

const ContactList = ({ contacts, deleteContacts }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        if (contacts.length > 0) {
            let curr_inner = [contacts[0]], result = [curr_inner];

            for (let i = 1; i < contacts.length; i++) {
                if (contacts[i].name[0].toUpperCase() !== contacts[i - 1].name[0].toUpperCase()) { // Первые буквы не равны?
                    result.push(curr_inner = []); // Создается новый массив, добавляется в result
                } // curr начинает ссылаться на этот массив, элементы продолжат добавляться туда
                curr_inner.push(contacts[i]);
            }
            setData(result);
        }
    }, [contacts])

    const Section = ({ items }) => {
        return (
            <>
                {items.map((item, i) => {
                    return (
                        <ContactItem deleteContacts={deleteContacts} key={i} info={item} />
                    )
                })}
            </>
        )
    }

    return (
        <div className="contactList">
            {
                data.map((array, i) => {
                    return (
                        <div className="contactList__section" key={i}>
                            <h3>
                                {array[0].name[0].toUpperCase()}
                            </h3>
                            <Section items={array} />
                        </div>
                    )
                })
            }
        </div>
    )
}



export default ContactList