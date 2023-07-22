import { Meta, Player } from '@/utils/types';
import { useEffect, useState } from 'react';

function useAllPlayers(page: number, perPage?: number) {
    const [data, setData] = useState<Player[] | null>(null);
    const [meta, setMeta] = useState<Meta | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${perPage}`
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

    const playersSortedByFirstName = data
        ? [...data].sort((playerA, playerB) => playerA.first_name.localeCompare(playerB.first_name))
        : null;

    const playersSortedByLastName = data
        ? [...data].sort((playerA, playerB) => playerA.last_name.localeCompare(playerB.last_name))
        : null;

    const playersSortedByPosition = data
        ? [...data].sort((playerA, playerB) => playerA.position.localeCompare(playerB.position))
        : null;

    const playersSortedByTeam = data
        ? [...data].sort((playerA, playerB) => playerA.team.full_name.localeCompare(playerB.team.full_name))
        : null;

    return { data, isLoading, isError, meta, playersSortedByFirstName, playersSortedByLastName, playersSortedByPosition, playersSortedByTeam };
}

export default useAllPlayers;
