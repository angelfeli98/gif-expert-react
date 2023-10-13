
const baseUrl = import.meta.env.VITE_END_POINT;

const fetchApi = async(url) => {
    const res = await fetch(`${baseUrl}/${url}`)
    const data = await res.json();
    return data;
}

export default fetchApi;