import { Player } from '@/utils/types';
import { useEffect, useState } from 'react';

function useAllPlayers(page: number) {
    const [data, setData] = useState<Player[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.balldontlie.io/api/v1/players?page=${page}`
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsError(true);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [page]);

    return { data, isLoading, isError };
}

export default useAllPlayers;

// page=206