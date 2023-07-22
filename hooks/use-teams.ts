import { Team } from '@/utils/types';
import { useEffect, useState } from 'react';

function useAllTeams() {
    const [data, setData] = useState<Team[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.balldontlie.io/api/v1/teams`
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
    }, []);

    const teamsSortedByDivision = data
        ? [...data].sort((teamA, teamB) => teamA.division.localeCompare(teamB.division))
        : null;

    const teamsSortedByConference = data
        ? [...data].sort((teamA, teamB) => teamA.conference.localeCompare(teamB.conference))
        : null;

    return {
        data,
        isLoading,
        isError,
        teamsSortedByDivision,
        teamsSortedByConference,
    };
}

export default useAllTeams;
