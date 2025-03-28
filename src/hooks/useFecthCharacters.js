import { useState, useEffect } from 'react';

const useFetchCharacters = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //introduce el valor de las diferentes urls que pedimos desde app automaticamente
    //sino habria que hacer un boton para ello
    useEffect(() => {
    
        const fetchData = async () => {
        try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Datos no encontrados');
                }

                const result = await response.json();
                setData(result);

            } catch (error) {
                setError(error);

            } finally {
                setLoading(false);
        }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchCharacters;
