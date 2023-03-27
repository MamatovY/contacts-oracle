
import { useHttp } from "../../hooks/http.hook";

const useBookService = () => {
    const { process, setProcess, request } = useHttp()
    const __apiBase = 'https://jsonplaceholder.typicode.com/users'

    const getAllContacts = async (params) => {
        const res = await request(__apiBase)
        return res
    }

    const getContact = async (id) => {
        const res = await request(__apiBase + '/id')
        return res
    }



    return {
        process,
        setProcess,
        getAllContacts,
        getContact
    }
}

export default useBookService