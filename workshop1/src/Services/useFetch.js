import {useState, useRef, useEffect} from "react";
import {getUrl} from "./defaults";

const baseUrl = getUrl()

// Custom hook for fetching data from an API
export default function useFetch(url) {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch(baseUrl + url)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [url]);

    return [data, setData];

}
