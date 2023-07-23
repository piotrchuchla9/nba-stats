import { setError } from '@/utils/redux/slices/dataNotFoundSlice';
import { Meta, Player } from '@/utils/types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function usePlayer(player: string, page: number, perPage?: number) {
    const [data, setData] = useState<Player[] | null>(null);
    const [meta, setMeta] = useState<Meta | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (player !== "") {
            const fetchData = async () => {
                try {
                    const response = await fetch(
                        `https://www.balldontlie.io/api/v1/players?search=${player}&page=${page}&per_page=${perPage}`
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
        } else {
            setData(null)
        }
    }, [player, page, perPage]);


    useEffect(() => {
        if (data?.length === 0) {
            dispatch(setError(true));
        } else {
            dispatch(setError(false));
        }
    }, [data]);

    const playersSortedByID = data
        ? [...data].sort((playerA, playerB) => playerA.id - playerB.id)
        : null;

    const playersSortedByFirstName = data
        ? [...data].sort((playerA, playerB) => playerA.first_name.localeCompare(playerB.first_name))
        : null;

    const playersSortedByLastName = data
        ? [...data].sort((playerA, playerB) => playerA.last_name.localeCompare(playerB.last_name))
        : null;

    const playersSortedByPosition = data
        ? [...data].sort((playerA, playerB) => {
            const positionA = playerA.position.trim().toLowerCase();
            const positionB = playerB.position.trim().toLowerCase();

            if (positionA === "" && positionB === "") return 0;
            if (positionA === "") return 1;
            if (positionB === "") return -1;

            return positionA.localeCompare(positionB);
        })
        : null;

    const playersSortedByTeam = data
        ? [...data].sort((playerA, playerB) => playerA.team.full_name.localeCompare(playerB.team.full_name))
        : null;

    return { data, playersSortedByFirstName, playersSortedByID, playersSortedByLastName, playersSortedByPosition, playersSortedByTeam, isLoading, isError, meta };
}

export default usePlayer;
