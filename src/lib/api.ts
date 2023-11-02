type Game = {
    Game: string;
    Year: number;
    Publisher: string;
}

type Response = {
    data: Game[];
    metadata: {
        pagination: {
            currentPage: number;
            lastPage: number;
            previousPage: number;
            nextPage: number;
        }
    };
}

export const getGames = (page: number = 1, limit: number = 10): Promise<Response> => {

    const url = process.env.NEXT_PUBLIC_GAMES_URL ?? "";
    const params = `?_limit=${limit}&_page=${page}`;

    return fetch(url + params).then(async (response) => {
        const total = Number(response.headers.get('X-Total-Count'));
        const totalPages = Math.ceil(total / limit);
        const previousPage = page <= 1 ? 1 : page - 1;
        const nextPage = page >= totalPages ? totalPages : page + 1;


        const data = await response.json();

        return {
            data,
            metadata: {
                pagination: {
                    currentPage: page,
                    lastPage: totalPages,
                    previousPage,
                    nextPage
                }
            }
        }
    })

}