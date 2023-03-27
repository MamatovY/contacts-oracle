import { useCallback, useState } from "react";

export const useHttp = () => {
    const [process, setProcess] = useState('loading');

    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
        try {
            setProcess('loading');
            console.log('fetch');
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
            }
            const data = await response.json();
            setProcess('finish');
            return data;
        } catch (e) {
            setProcess('error');
            throw e;
        }
    }, []);




    return {
        request,
        process,
        setProcess
    }
}