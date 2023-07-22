import { useState, useEffect } from 'react';
import { Game, Meta } from '@/utils/types';

function useAllGames(page: number, perPage: number) {
    const [data, setData] = useState<Game[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [meta, setMeta] = useState<Meta | null>(null);

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

    const gamesSortedByHighestScore = data
        ? [...data].sort((gameA, gameB) => {
            const highestScoreA = Math.max(
                gameA.home_team_score,
                gameA.visitor_team_score
            );
            const highestScoreB = Math.max(
                gameB.home_team_score,
                gameB.visitor_team_score
            );

            return highestScoreB - highestScoreA;
        })
        : null;

    const gamesSortedByLowestScore = data
        ? [...data].sort((gameA, gameB) => {
            const lowestScoreA = Math.min(
                gameA.home_team_score,
                gameA.visitor_team_score
            );
            const lowestScoreB = Math.min(
                gameB.home_team_score,
                gameB.visitor_team_score
            );

            return lowestScoreA - lowestScoreB;
        })
        : null;

    const gamesSortedByHighestDifference = data
        ? [...data].sort((gameA, gameB) => {
            const highestScoreA = Math.max(
                gameA.home_team_score,
                gameA.visitor_team_score
            );
            const lowestScoreA = Math.min(
                gameA.home_team_score,
                gameA.visitor_team_score
            );
            const differenceA = highestScoreA - lowestScoreA;

            const highestScoreB = Math.max(
                gameB.home_team_score,
                gameB.visitor_team_score
            );
            const lowestScoreB = Math.min(
                gameB.home_team_score,
                gameB.visitor_team_score
            );
            const differenceB = highestScoreB - lowestScoreB;

            return differenceB - differenceA;
        })
        : null;

    const gamesSortedByDate = data
        ? [...data].sort((gameA, gameB) => {
            const dateA = new Date(gameA.date);
            const dateB = new Date(gameB.date);

            return dateB.getTime() - dateA.getTime();
        })
        : null;

    return {
        data,
        isLoading,
        isError,
        meta,
        gamesSortedByHighestScore,
        gamesSortedByLowestScore,
        gamesSortedByHighestDifference,
        gamesSortedByDate,
    };
}

export default useAllGames;
