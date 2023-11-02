import { Game } from "@/types/Game";

export const getGames = (page: number = 1, limit: number = 10): Promise<Game[]> => {

    const url = process.env.NEXT_PUBLIC_GAMES_URL ?? "";
    const params = `?_limit=${limit}&_page=${page}`;

    return fetch(url + params).then((response) => {
        return response.json();
    })

}