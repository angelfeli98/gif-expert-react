
import env from '../utils/env';

const fetchApi = async(url) => {
    const res = await fetch(`${env.baseUrl}/${url}`);
    const data = await res.json();
    return data;
}

export default fetchApi;