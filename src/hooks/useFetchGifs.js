
import { useEffect, useState } from 'react';
import fetchApi from '../api/gif';

import env from '../utils/env';

const useFetchGifs = (category) => {

    const [isLoading, setIsLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        async function fetchGif() {
            setIsLoading(true);
            const { data } = await fetchApi(`?api_key=${env.key}&q=${category}&limit=10`);
            setGifs(data.map(({id, title, images}) => ({id, title, url: images.downsized_medium.url})));
            setIsLoading(false)
        }

        fetchGif();
    }, [category])

    return [isLoading, gifs];
}

export default useFetchGifs;