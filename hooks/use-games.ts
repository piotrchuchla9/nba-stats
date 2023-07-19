import { Game, Meta } from '@/utils/types';
import { useEffect, useState } from 'react';

function useAllGames(page: number, perPage?: number) {
    const [data, setData] = useState<Game[] | null>(null);
    const [meta, setMeta] = useState<Meta | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.balldontlie.io/api/v1/games?page=${page}&per_page=${perPage}`
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setMeta(jsonData.meta);
                setData(jsonData.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsError(true);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [page, perPage]);

    return { data, isLoading, isError, meta };
}

export default useAllGames;
